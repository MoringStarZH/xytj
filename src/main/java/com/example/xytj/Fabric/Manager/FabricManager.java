package com.example.xytj.Fabric.Manager;


import com.example.xytj.Fabric.ChaincodeManager;
import com.example.xytj.Fabric.FabricConfig;
import com.example.xytj.Fabric.bean.Chaincode;
import com.example.xytj.Fabric.bean.Orderers;
import com.example.xytj.Fabric.bean.Peers;
import lombok.extern.slf4j.Slf4j;

import java.io.File;

@Slf4j
public class FabricManager {


    private ChaincodeManager testManager;

    private ChaincodeManager borrowManager;


    private static FabricManager instance = null;

    //指定channel的名称,从而调用不同的服务
    private final static String channelName = "mychannel";

    private final static String version = "1.0";

    /**
     * 获取一个FabricManager的实例
     */
    public static FabricManager obtain() throws Exception {
        if (null == instance) {
            synchronized (FabricManager.class) {
                if (null == instance) {
                    instance = new FabricManager();
                }
            }
        }
        return instance;
    }

    //生成实例
    private FabricManager() throws Exception {
        //获取实例时调用getconfig()进行加载配置信息,调用ChaincodeManager构造方法生成ChaincodeManager实例对象
        testManager = new ChaincodeManager(getConfig(1));
        borrowManager = new ChaincodeManager(getConfig(2));
    }

    /**
     * 获取节点服务器管理器
     *
     * @return 节点服务器管理器
     */
    public ChaincodeManager getManager(Integer type) {
        if (type == 1) {
            return testManager;
        }
        return borrowManager;
    }

    /**
     * 根据节点作用类型获取节点服务器配置
     * 该方法主要进行加载配置文件,(如果区块链相关的配置信息写在配置文件中);
     * 初始化数据库连接信息;
     * 再加载证书和通道相关文件的路径。
     *
     * @param //type 服务器作用类型（1、执行；2、查询）
     * @return 节点服务器配置
     */

    //一般来说你们目前通道上只会加入一个链码，所以这里改第一个if语句里面的就行

    private FabricConfig getConfig(Integer type) {
        FabricConfig config = new FabricConfig();
        config.setOrderers(getOrderers());
        config.setPeers(getPeers());
        if (type == 1) {
            config.setChaincode(getChaincode(channelName, "mycc"
                    , "/opt/gopath/src/github.com/hyperledger/fabric/singlepeer/chaincode/go/xytj/", version));
        } else {
            config.setChaincode(getChaincode(channelName, "borrow"
                    , "github.com/hyperledger/fabric/singlepeer/chaincode/go/chain/", version));
        }
        //加载通道配置文件
        config.setChannelArtifactsPath(getChannleArtifactsPath());
        //加载证书的相关配置文件
        config.setCryptoConfigPath(getCryptoConfigPath());
        return config;
    }

    /**
     * 加载排序节点相关配置信息
     *
     * @return
     */
    private Orderers getOrderers() {
        Orderers orderer = new Orderers();
        //设置根域名和排序服务器对象
        orderer.setOrdererDomainName("example.com");
        //设置orderer节点名称和所在地址
        orderer.addOrderer("orderer.example.com", "grpc://124.223.48.82:7050");
        //orderer.addOrderer("orderer1.example.com", "grpc://127.0.0.1:8050");
//        orderer.addOrderer("orderer2.example.com", "grpc://x.x.x.xxx:7050");
        return orderer;
    }

    /**
     * 获取节点服务器集
     * 加载节点服务相关配置信息
     *
     * @return 节点服务器集
     */
    private Peers getPeers() {
        Peers peers = new Peers();
        //设置组织名
        peers.setOrgName("Org1");
        //设置组织的MSPID
        peers.setOrgMSPID("Org1MSP");
        //设置根域名
        peers.setOrgDomainName("org1.example.com");
        //节点服务器对象（包含节点名称，节点事件监听名称，节点访问地址，节点事件监听访问地址，CA访问地址）
        peers.addPeer("peer0.org1.example.com", "peer1.org1.example.com",
                "grpc://124.223.48.82:7051", "grpc://124.223.48.82:7051", "http://124.223.48.82:7054");
        return peers;
    }


    /**
     * 获取智能合约
     * 通过getChaincode()方法加载chaincode相关信息,
     * 需要定义Chaincode对象,
     * （包含归属的channel名称，chaincode名称，安装路径，版本号）,
     * 设置执行智能合约操作等待时间，执行智能合约实例等待时间
     *
     * @param channelName      频道名称
     * @param chaincodeName    智能合约名称
     * @param chaincodePath    智能合约路径
     * @param chaincodeVersion 智能合约版本
     * @return 智能合约
     */
    private Chaincode getChaincode(String channelName, String chaincodeName, String chaincodePath, String chaincodeVersion) {
        Chaincode chaincode = new Chaincode();
        chaincode.setChannelName(channelName);
        chaincode.setChaincodeName(chaincodeName);
        chaincode.setChaincodePath(chaincodePath);
        chaincode.setChaincodeVersion(chaincodeVersion);
        //
        chaincode.setInvokeWaitTime(100000);
        chaincode.setDeployWaitTime(120000);
        return chaincode;
    }

    /**
     * 获取channel-artifacts配置路径
     *
     * @return /WEB-INF/classes/fabric/channel-artifacts/
     */
    private String getChannleArtifactsPath() {
        String directorys = "/home/xytj/jar/fabric";
//        String directorys = ChaincodeManager.class.getClassLoader().getResource("fabric").getFile();

        log.debug("directorys = " + directorys);
        File directory = new File(directorys);
        log.debug("directory = " + directory.getPath());

        return directory.getPath() + "/channel-artifacts/";
    }

    /**
     * 获取crypto-config配置路径
     *
     * @return /WEB-INF/classes/fabric/crypto-config/
     */
    private String getCryptoConfigPath() {
        String directorys = "/home/xytj/jar/fabric";
//        String directorys = ChaincodeManager.class.getClassLoader().getResource("fabric").getFile();
        log.debug("directorys = " + directorys);
        File directory = new File(directorys);
        log.debug("directory = " + directory.getPath());

        return directory.getPath() + "/crypto-config/";
    }

}