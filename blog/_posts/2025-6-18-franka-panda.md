---
layout: post
title: Franka Panda
categories: [robotics]
tags: [config]
description: >
  Configured `Franka Panda` and `3D-Connexion teleoperation` from scratch while working at [MiLab](https://milab.westlake.edu.cn/) and applied them to conduct research on manipulation. You can find the repo [here](https://github.com/ZhefeiGong/Franka_Robot_Arm) !
sitemap: false
hide_last_modified: true
menu: false
image: 
  path: /assets/blog/franka_arm.png
#   srcset:
#     1060w: /assets/ori/grid.jpg
#     530w:  /assets/ori/grid.jpg
#     265w:  /assets/ori/grid.jpg
# related_posts:
#   - blog/_posts/2017-11-23-example-content-ii.md
#   - blog/_posts/2012-02-07-example-content.md
order: 1
# accent_color: '#268bd2'
accent_image:  
  background: '#202020'
  overlay: false
sitemap: false
---


- Table of Contents
{:toc .large-only}


![Franka Panda robotic arm flow](/assets/blog/franka_flow.png){:.lead width="800" height="100"}
The construction process of the hardware platform.
{:.figure}


## ⚙️ Important Things

> to Grab before Starting

* [guideline_csdn(zh)](https://blog.csdn.net/Hinyeung_Limited/article/details/123524860?ops_request_misc=&request_id=&biz_id=102&utm_term=Panda%E6%9C%BA%E6%A2%B0%E8%87%82%E4%BD%BF%E7%94%A8%E6%95%99%E7%A8%8B&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-1-123524860.142^v100^control&spm=1018.2226.3001.4187)
* [instruction_book(zh)](https://download.franka.de/Product-Manual-Franka-Emika-Robot_ZH_10_2021.pdf)


🤔 **Franka Control Interface** (**FCI**)

`Franka Control Interface` is a real-time control framework provided by **Franka Emika** for the **Panda** robotic arm. It enables developers to achieve high-performance control by directly interfacing with the robot at a low level. -> [manual](https://frankarobotics.github.io/docs/)
- High Frequency Control: Operates at up to **1 kHz**, allowing precise control for advanced applications like force control and trajectory optimization.
- Low-level Access: Users can directly control joint positions, velocities, torques, or end-effector forces and poses.
- Real-time Feedback: Provides detailed robot states, such as joint positions, forces, external torques, and end-effector status.
- Customization: Through the `libfranka` C++ library, users can create their own control algorithms.


🤔 **Difference** between **Franka** and **UR**

| Feature                    | [Franka FCI](https://frankarobotics.github.io/docs/)                 | [UR RTDE](https://www.universal-robots.com/articles/ur/interface-communication/real-time-data-exchange-rtde-guide/) |
| -------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Real-time Capability**   | High (1 kHz)                                                      | Medium (2 ms update frequency)                                                                                      |
| **Control Ability**        | Supports low-level control (joint force, velocity, position)      | Supports joint or end-effector position and velocity control                                                        |
| **State Feedback**         | High precision (joints, forces, end-effector states)              | Customizable feedback, fairly comprehensive                                                                         |
| **Development Complexity** | High (requires real-time kernel and low-level programming)        | Lower (TCP/IP communication, standard system compatible)                                                            |
| **Typical Applications**   | Force control tasks, advanced trajectory planning, research tasks | Industrial automation tasks, monitoring, and logging                                                                |
| **Supported Languages**    | C++ (`libfranka`), third-party library extensions needed          | Multi-language support (Python, C++, Java, etc.)                                                                    |
| **Hardware Requirements**  | Real-time kernel system, direct communication with the robot arm  | Standard system, communicates with the robot via TCP/IP                                                             |
| **Target Users**           | Researchers, advanced developers                                  | Engineers, industrial automation developers                                                                         |


🤔 **Meanings of Different Colors**

* **White**: Interactive
* **Blue**: Activated
* **Cyan**: Initiating motion
* **Yellow**: Locked
* **Red**: Error
* **Pink**: Conflict
* **Green**: Automatic execution


🤔 **IP address connection**

Connect the control panel through `192.168.3.20\desk` (IP address of the robot arm). And we can control the panda through `192.168.3.20`.


🤔 **libfranka**

A C++ library that provides low-level control of Franka Robotics research robots. Its source **code** is available at [here](https://github.com/frankaemika/libfranka). **Documentation** is available at [here](https://frankarobotics.github.io/docs/libfranka.html).


🤔 **franka_ros**

the [ROS integration](https://wiki.ros.org/franka_ros) for Franka Robotics research robots, including support for ROS Control and MoveIt. It also contains `franka_description`, a collection of URDF models and 3D meshes that can be useful outside of ROS. The **repository** is available at [here](https://github.com/frankaemika/franka_ros). Documentation is available at [here](https://frankarobotics.github.io/docs/franka_ros.html). And the order is as following: $\text{PC} \Rightarrow \text{franka}\_\text{ros} \Rightarrow \text{libfranka} \Rightarrow \text{Franka Control Interface(FCI)} \Rightarrow \text{Robot Arm}$


🤔 **Frankapy**

This is a **software** [package](https://github.com/iamlab-cmu/frankapy) used for **controlling** and learning skills on the Franka Emika Panda Research Robot Arm. And it's based on [libfranka](https://github.com/frankaemika/libfranka) and [franka-interface](https://github.com/iamlab-cmu/franka-interface), which is a C++ Library for Interfacing with [libfranka](https://github.com/frankaemika/libfranka) and [Frankapy](https://github.com/iamlab-cmu/frankapy). 
Installation Instructions and Network Configuration Instructions are also available [here](https://iamlab-cmu.github.io/frankapy). And it's provided from [IAM Lab](https://iamlab-cmu.github.io/).


🤔 **serl_franka_controllers**

[serl_franka_controllers](https://github.com/rail-berkeley/serl_franka_controllers) is a ROS package designed to control Franka Emika Robot through `libfranka` and `franka_ros`. This package provides a compliant yet accurate Cartesian Impedance Controller for safe online reinforcement learning algorithms, as well as a Joint Position Controller for resetting arm. It's provided from [RAIL](https://github.com/rail-berkeley).


## ⚙️ Setting

> basically we can control the robot through `libfranka` and `franka_ros` from `Franka`. while there exists a number of `third-party` suites for off-the-shelf controllers like `serl_franka_controllers` from [here](https://github.com/rail-berkeley/serl_franka_controllers).

📒 **Prerequisite**
* `Ubuntu 20.04`
* `ROS Noetic`
* `libfranka` and `franka_ros` ( both $\geq$ 0.8.0 )
* `controllers` chosen according to specific requirements


### 🛠️ Franka Installation

#### 🔧 Install Noetic for Ubuntu 20.04
set download source
```bash
sudo sh -c '. /etc/lsb-release && echo "deb http://mirrors.ustc.edu.cn/ros/ubuntu/ `lsb_release -cs` main" > /etc/apt/sources.list.d/ros-latest.list'
```
add ros-key
```bash
sudo apt install curl 
curl -s https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | sudo apt-key add -
```
download noetic package
```bash
sudo apt update
sudo apt install ros-noetic-desktop-full
```
set global environment
```bash
echo "source /opt/ros/noetic/setup.bash" >> ~/.bashrc 
source ~/.bashrc
```
install tools for ros
```bash
sudo apt install python3-rosdep python3-rosinstall python3-rosinstall generator python3-wstool build-essential
```
check the installation
```bash
roscore
rosrun turtlesim turtlesim_node
rosrun turtlesim turtle_teleop_key
```

#### 🔧 Install `libfranka` and `franka_ros`
build from the ROS repositories, and please refer to [here](https://www.franka.io/docs/compatibility.html) to check the version-match between the franka system and the softwares'
```bash
sudo apt-get update
sudo apt-get install ros-noetic-libfranka ros-noetic-franka-ros
```
build from source
* [libfranka](https://github.com/frankaemika/libfranka/blob/main/README.md)
* [franka_ros](https://frankarobotics.github.io/docs/installation_linux.html#building-the-ros-packages)

#### 🔧 Build `serl_franka_controllers`
```bash
mkdir -p catkin_ws/src
cd catkin_ws/src
git clone git@github.com:rail-berkeley/serl_franka_controllers.git
cd catkin_ws
catkin_make -DPYTHON_EXECUTABLE=/usr/bin/python3 --pkg serl_franka_controllers
cd ..
source catkin_ws/devel/setup.bash
```

#### 🔧 Build virtual env
build miniforge if you don't have it
```bash
cd /path/you/want/to/locate/
curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
source /path/to/your/miniforge3/bin/activate
```
build the corresponding environment
```bash
cd robot_infra
conda create -n robot_infra python=3.9
conda activate robot_infra
pip install -e .
```
check the path of each package in the env
```bash
python
import _package_to_test_
print(_package_to_test_.__file__)
```


### 🚗 Franka Run
* initialization
```bash
source /home/franka/jeffrey/miniforge3/bin/activate
conda activate robot_infra
cd /home/franka/jeffrey/Franka_Robot_Arm
```
* run
```bash
source catkin_ws/devel/setup.bash
python franka_ctrl/test.py --robot_ip=192.168.3.20
```
* close
```bash
killall -9 roscore
killall -9 rosmaster
```


### 🛠️ Others Installation

#### 🖱️ SpaceMouse
install the packages for SpaceMouse (3Dconnexion)
```bash
pip install numpy termcolor atomics scipy
pip install git+https://github.com/cheng-chi/spnav
sudo apt install libspnav-dev spacenavd
sudo systemctl start spacenavd
```



### 🍀 Ubuntu Install w/ `real-time` Kernel

#### 🔧 Download Source 
download the source from [here](https://www.kernel.org/pub/linux/kernel/)
```bash
# build foler
mkdir franka_env
cd franka_env
# download corresponding packages
curl -SLO https://www.kernel.org/pub/linux/kernel/v5.x/linux-5.15.76.tar.gz
curl -SLO https://www.kernel.org/pub/linux/kernel/projects/rt/5.15/older/patch-5.15.76-rt53.patch.gz
# unzip
tar xvzf linux-5.15.76.tar.gz
gunzip patch-5.15.76-rt53.patch.gz
# extract source code and insert the patch
cd linux-5.15.76
patch -p1 < ../patch-5.15.76-rt53.patch
```

#### 🔧 Build Source
build the kernel from now on (refer to [here](https://blog.csdn.net/tiboyang/article/details/127700249) or [here](https://www.franka.cn/FCI/installation_linux.html#setting-up-the-real-time-kernel))
```bash
# download neccessary packages
sudo apt-get install build-essential bc curl ca-certificates gnupg2 libssl-dev lsb-release libelf-dev bison flex dwarves zstd libncurses-dev
# borrow the config setting from current kernel
make olddefconfig
```

update the config of current kernel
```bash
make menuconig
```
* General Setup -> Preemption Model -> Fully Preemptible Kernel (Real-Time)
* Cryptographic API -> Certificates for signature checking -> Provide system-wide ring of trusted keys -> Additional X.509 keys for default system keyring -> remove  "debian/canonical-certs.pem" -> save to .config
open .config for further update
```bash
gedit .config
# change the following old commands
CONFIG_SYSTEM_TRUSTED_KEYS="debian/canonical-certs.pem"
CONFIG_SYSTEM_REVOCATION_KEYS="debian/canonical-revoked-certs.pem"
CONFIG_DEBUG_INFO_BTF=y
# to the following new commands
CONFIG_SYSTEM_TRUSTED_KEYS=""
CONFIG_SYSTEM_REVOCATION_KEYS=""
CONFIG_DEBUG_INFO_BTF=n
```

begin to build kernel locally
```bash
fakeroot make -j24 deb-pkg
```

#### 🔧 Install Source
finally, install the built kernel with patch
```bash
# install
sudo dpkg -i ../linux-headers-5.15.76-rt53*.deb ../linux-image-5.15.76-rt53*.deb
# re-start the computer
sudo reboot
# check
uname -msr
```

#### 🔧 Add realtime permission
build a group for realtime command
```bash
sudo addgroup realtime
sudo usermod -a -G realtime $(whoami)
```
add the following limits into `/etc/security/limits.conf`, which is set for realtime group
```bash
@realtime soft rtprio 99
@realtime soft priority 99
@realtime soft memlock 102400
@realtime hard rtprio 99
@realtime hard priority 99
@realtime hard memlock 102400
```
finally, re-start your computer to apply it
```bash
reboot
```



## ⚙️ TroubleShooting

🔪 **`End-effector not initialized`**

* unclear problem -> it can be solved after several minutes

🔪 **`Pilot mode in /desk`**

Switching between desk control and end effector control
* `desk control`: Control through the Desk interface using high-level actions or predefined tasks.
* `end effector control`: Direct control of the robot's **end-effector** (the hand or gripper).

🔪 **`libfranka： Move command aborted by reflex!["communication_constraints_violation"] control_command_success_rate: 0,78`**

* the problem mainly comes from the communication delay between the PC and the franka, and you can check the following reasons: 1) overload PC (limited CPU recourses) 2) unsuitable network card 3) inactivated real-time kernel 3) network issues from cable

🔪 **`Robot error: joint limit reached`**

* the error comes from the abnormal recovery of franka arm, which is unknown about the reason, and what we can do is move the robot arm several times and wait a moment

