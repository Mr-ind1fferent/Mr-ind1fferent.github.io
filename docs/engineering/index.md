---
title: 环境与指令
order: 1
---

# 环境与指令

> 这里将收录环境配置、常用指令、部署步骤与问题排查记录。

# 注意事项&常见问题
## todesk远程连接后输入法失控
可能和todesk服务有关，重启todesk服务：`sudo systemctl restart todeskd.service`或尝试切换远程窗口到后台后再切回去
## 相机启动问题
相机进程**不要多次启动**，开机后按照流程启动一次即可，之后一直使进程持续在终端。
关闭进程后RealSense/libusb/设备固件在上一次退出后没有恢复到干净状态，则可能导致相机启动问题。
检查连接相机设备数量和序列号：`rs-enumerate-devices -s`

## 使用codex cli
新对话：`codex`，选择模型和推理强度：`/model`
查看历史对话：`codex resume --all`
codex诊断：`codex doctor`
终端设置代理：
```bash
export HTTP_PROXY=http://127.0.0.1:7897  
export HTTPS_PROXY=http://127.0.0.1:7897  
export http_proxy=$HTTP_PROXY  
export https_proxy=$HTTPS_PROXY
```
`env | grep -i proxy`

## ！！！**关机前将机械臂复位**！！！

# 开机
### 底盘和工控机
![[Pasted image 20260926144218.png]]
1. 先将机械臂水平放置，夹爪，示教器手动重置为闭合状态。
2. 先按下户外电源**主开关**，再按一下**AC开关**，此时工控机和机械臂会正常上电。
3. 再按下底盘的电源开关，**屏幕、路由器和USB拓展坞由底盘供电。**
## 遥控器
1. 拨杆全部拨到上面，同时按两个开关键
2. 模式：中间摇杆位于中间为遥控模式，向上推为普通模式

# 远程连接
### 局域网
WiFi名：aloha-2628，密码：12345678
ip：192.168.1.196
# 采集数据



# 4.8 数据转换
HDF5→LeRobot 脚本位置：
```txt
/home/agilex/pika_ros/src/data_tools/scripts/hdf5_to_lerobot.py
```
实测：
- `aloha` 环境：`ModuleNotFoundError: No module named 'lerobot'`。
- `pika` 环境：`ModuleNotFoundError: No module named 'h5py'`。
- `vt` 环境：`ModuleNotFoundError: No module named 'h5py'`。
- 三个环境都不能正常显示该脚本的 `--help`。
即使补齐依赖，脚本仍不能直接转换本轮 HDF5：
- 只搜索 `**/data.hdf5`，本轮及供应商 ALOHA 样例命名为 `episode_0.hdf5`。
- 期望 `arm/jointStatePosition/...`、`arm/endPose/...` 和外部图片路径。
- 实际采集文件使用 `/observations/qpos`、`/action` 和 HDF5 内嵌图像。
- 深度转换代码被注释。
- 默认输入目录和输出目录都为 `/home/agilex/data`，转换前会递归删除输出目录，默认参数存在删除原始数据的严重风险。
因此本轮没有运行转换主体，避免破坏原始数据。
全机检索没有发现 MCAP→ARIO 转换程序、MCAP 输入样例或 ARIO 输出样例。

