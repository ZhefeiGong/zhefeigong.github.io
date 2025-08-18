---
layout: post
title: Tiago++
categories: [robotics]
tags: [config]
description: >
  Configured `Tiago++` and `Quest3 teleoperation` from scratch while working at [TASL](https://tasl.ucr.edu/) and applied them to conduct research on real-world rl for mobile-manipulation. You can find the repo [here](https://github.com/ZhefeiGong/Tiago++) !
sitemap: false
hide_last_modified: true
menu: false
image: 
  path: /assets/blog/tiago++_robot.png
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

![Tiago ++ flow](/assets/blog/tiago++_flow.png){:.lead width="800" height="100"}
The construction process of the hardware platform.
{:.figure}



## ⚙️ [TIAGO++](https://pal-robotics.com/robot/tiago/) Setup

> [devel-computer](https://docs.pal-robotics.com/tiago-dual/handbook.html#development-computer) - [intern-computer](https://docs.pal-robotics.com/tiago-dual/handbook.html#productname-robot-s-internal-computers) - [ros-tutorial](https://wiki.ros.org/Robots/TIAGo++/Tutorials)

**✨ start tiago**
* press `power button`(left)
* press `start button`(right)

**✨ pal distro environment variable**
```bash
export PAL_DISTRO=gallium
export ROS_DISTRO=noetic # ros1 setup
source /opt/pal/${PAL_DISTRO}/setup.bash
```

**✨ export ROS master connection**
```bash
export ROS_MASTER_URI=http://tiago-224c:11311
export ROS_IP=192.168.0.110
```

**✨ run commands**
```bash
# get into the virtual env first
conda activate tiago
# then begin to execute through ros
...
```

**✨ basic ros commands**
```bash
# show all of the topic on tiago rosmaster
rostopic list # or `rosservice` or `rosnode`
# show a specific topic
rostopic info /topic_name
rostopic echo /topic_name
rostopic type /topic_name
# show the communication graph
rqtgraph
```

**✨ visit [web-commander](https://docs.pal-robotics.com/tiago-dual/handbook.html#webcommander) and [web-user-interface](https://docs.pal-robotics.com/tiago-dual/handbook.html#web-user-interface)**
```bash
# Web Commander
http://tiago-224c:8080/
# Web Interface
http://tiago-224c/
# username: pal
# password: pal
```



## ⚙️ Teleoperation Setup

**✨ install [telemoma-real](https://github.com/UT-Austin-RobIn/telemoma/tree/telemoma-real)**
```bash
# install telemoma for real robot teleoperation
git clone -b telemoma-real --single-branch https://github.com/UT-Austin-RobIn/telemoma.git
conda create --name tiago python==3.9 # OmniGibson requires python3.9
conda activate tiago
cd telemoma
pip install -r requirement.txt
pip install -e .
```

**✨ install [tracikpy](https://github.com/mjd3/tracikpy) for computing the IK of the robots**
```bash
# the package is simple to set up and only requires the URDF of the robot to get started.
git clone https://github.com/mjd3/tracikpy.git
cd tracikpy
pip install -e .
```

**✨ install [oculus_reader](https://github.com/rail-berkeley/oculus_reader) for Quest3 VR tele-operate**
* the communication flow: `Meta Quest 3` -> `telep-debug.apk` -> `android-tools-adb` -> `ubuntu`
* open development mode through Meta Horizon app
* follow [here](https://github.com/rail-berkeley/oculus_reader/blob/main/README.md) to execute
* wait a moment to ware the headset after launching the connection
```bash
git clone https://github.com/rail-berkeley/oculus_reader.git
cd oculus_reader
pip install -e .
```



## 🎮 TIAGO Teleoperation 

* Oculus hand controllers are tracked with respect to the headset. 
* To start controlling the **arms**, move the corresponding controller while holding the **trigger** button. 
* The **gripper** button can be used to toggle between opening and closing the gripper, only when the corresponding arm is in **triggered** mode.
* The joysticks are used to control the **translation** (**right** controller) and **rotation** (**left** controller) of the base.

**✨ connect TIAGO**
```bash
export PAL_DISTRO=gallium
export ROS_DISTRO=noetic
source /opt/pal/${PAL_DISTRO}/setup.bash
export ROS_MASTER_URI=http://tiago-224c:11311
export ROS_IP=192.168.0.110
conda activate tiago
```

**✨ connect oculus_reader**
```bash
# check the connection 
# (if network connection is not working, please connect through usb first and reconnect through ip then)
python workspace/tests/oculus_reader_check.py
# adb devices
# adb shell ip route
# adb shell am force-stop com.rail.oculus.teleop
```

**✨ run telemoma**
```bash
# oculus_reader connection through network
python telemoma/telemoma/teleop.py --robot tiago --teleop_config telemoma/telemoma/configs/only_vr.py 
```

**✨ trouble shooting**

`cannot connect to tiago's topic through ros`
* run the `connect TIAGO` commands again to re-connect the robot

`cannot publish message to tiago`
* wait some time (1s) to let `publisher` stay awake



## 🎮 TIAGO Data Collection

**✨ run**

```bash
# check the connection of oculus_reader
python workspace/tests/oculus_reader_check.py
# launch teleoperator for data collection
python workspace/teleop/data_collector.py
# launch recorder for save files
python workspace/teleop/data_recorder.py
# check the saved files
python workspace/teleop/data_checker.py
# check the videos
vlc path/to/your/video/*.mp4
```




