Title: Vagrant and Virtualbox on Hyper-v ubuntu 
Description: Setting Up Vagrant and VirtualBox on an Ubuntu VM Running on Hyper-V
Lead: vagrant with virtualbox on ubuntu os
Tags: [vagrant,hyper-v,virtualization,Windows,ubuntu,virtualbox]
IsPost: true
Image: vagrant-vbox.jpeg
By: Chandra kanth
Published: 20-07-2023
---

# Introduction

In this blog post, i will guide you through the process of setting up Vagrant and VirtualBox on an Ubuntu virtual machine running on Hyper-V. Vagrant is a powerful tool that streamlines the management of virtual machine environments, while VirtualBox provides the virtualization capabilities. By combining these tools within an Ubuntu VM on Hyper-V, you'll create a robust and efficient development environment.

-------------------------

# Prerequisites

Before we begin, ensure you have the following:

A Windows machine with Hyper-V enabled.
An Ubuntu virtual machine already set up on Hyper-V.

-------------------------
# Installing VirtualBox and Vagrant

First, let's ensure your system is up to date by running the following commands in the terminal:

**Command:**

```bash
sudo apt update
 sudo apt upgrade
```

Next, download and install VirtualBox:

**Command:**

```bash
wget https://download.virtualbox.org/virtualbox/7.0.8/virtualbox-7.0_7.0.8-156879~Ubuntu~jammy_amd64.deb
 sudo dpkg -i virtualbox-7.0_7.0.8-156879~Ubuntu~jammy_amd64.deb
```

<a href="https://imgur.com/C1ibY0o"><img src="https://i.imgur.com/C1ibY0o.png" title="source: imgur.com" /></a>

Now, let's install Vagrant:

**Command:**

```bash 
wget https://releases.hashicorp.com/vagrant/2.3.6/vagrant_2.3.6_x86_64.deb
 sudo dpkg -i vagrant_2.3.6_x86_64.deb
```

<a href="https://imgur.com/stCNmfN"><img src="https://i.imgur.com/stCNmfN.png" title="source: imgur.com" /></a>

# Notes :

Make sure docker desktop is not running as virtual-box is running both of them run on different virtualization and will get conflict on ubuntu. 

Install lscpu to check if virtualization is enabled on you ubuntu. 

```bash
sudo apt-get install util-linux
```

Another method :

```bash
sudo kvm ok
```
<a href="https://imgur.com/ypewBHt"><img src="https://i.imgur.com/ypewBHt.png" title="source: imgur.com" /></a>

Once you have virtualization is enabled on your ubuntu virtual machine. Now we can start installing vagrant and oracle vm.

we also need to install docker on ubuntu so that we can access mutliple virtual machine running on vagrant with docker ssh content. 

vagrant plugin list: 
<a href="https://imgur.com/QLSWofr"><img src="https://i.imgur.com/QLSWofr.png" title="source: imgur.com" /></a>


-------------------------
# Helpful Vagrant Commands

**vagrant up**
Launches the virtual machine and provisions it based on the settings in the Vagrantfile.

**Command:**

```bash
vagrant up
```

**vagrant status**
Shows the current status of the virtual machine.

**Command:**

```bash
vagrant status
```

**vagrant ssh**
Allows you to SSH into the virtual machine.

**Command:**

```bash
vagrant ssh
```

**vagrant suspend**
Pauses the virtual machine.

**Command:**

```bash
vagrant suspend
```

**vagrant resume**
Resumes a paused virtual machine.

**Command:**

```bash
vagrant resume
```

**vagrant halt**
Shuts down the virtual machine.

**Command:**

```bash
vagrant halt
```

**vagrant destroy**
Destroys the virtual machine. This will delete all data on the virtual machine.

**Command:**

```bash
vagrant destroy
```

**vagrant snapshot**
Allows you to take a snapshot of the current state of the virtual machine.

**Command:**

```bash
vagrant snapshot
```

**vagrant --help**
Displays help information for Vagrant commands.

**Command:**

```bash
vagrant --help
```

-------------------------
# Testing Vagrant Setup with a Sample Ubuntu Box

To get started quickly, let's set up a sample Ubuntu box named "jammy64":

**Command:**

```bash
    vagrant init ubuntu/jammy64
```

To ensure the shared folders work seamlessly, modify the Vagrantfile as follow,when we run vagrant init it will create a vagrant file that we have to edite and add the following.

Add the following into your vagrant file.
```rb
    config.vm.synced_folder ".", "/vagrant", type: "rsync"
```

Also let's provision the vm with docker init. We are running docker inside a viartual machine which is running over a hyper-v. This is one layer of nested virtualization. 

```rb
# install docker:
config.vm.provision 'docker'
```

following is the file

<details>
    <summary>Click to toggle text</summary> 
    <p>
        ```bash
            sudo 123
        ```
     </p>
</details>



Additionally, if you want to install Docker inside the VM, add the following to the Vagrantfile:

**Command:**

```bash
    config.vm.provision 'docker'
```

Now, bring up the environment with the following command:

**Command:**

```bash
    vagrant up
```

You should see [vagrant up log](https://gist.github.com/chan18/8eda7dff64412a75cf3035b01fa9e491).

if you open virtual box it should look somethin glike this. 

<a href="https://imgur.com/Y7U5Jy5"><img src="https://i.imgur.com/Y7U5Jy5.png" title="source: imgur.com" /></a>

To check if the docker is installed let's ssh into the vagrant vm.

**command**

```bash
   vagrant ssh
```

**output log**

Please execute the following command inside the virtual machine to check the Docker version. If everything goes smoothly, it means we have successfully provisioned the VM with Docker initialization.
> docker --version

```bash
vagrant ssh
Welcome to Ubuntu 22.04.2 LTS (GNU/Linux 5.15.0-69-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  System information as of Thu Jul 20 15:37:15 UTC 2023

  System load:  0.0               Processes:                103
  Usage of /:   7.6% of 38.70GB   Users logged in:          0
  Memory usage: 26%               IPv4 address for docker0: 172.17.0.1
  Swap usage:   0%                IPv4 address for enp0s3:  10.0.2.15


 * Introducing Expanded Security Maintenance for Applications.
   Receive updates to over 25,000 software packages with your
   Ubuntu Pro subscription. Free for personal use.

     https://ubuntu.com/pro

Expanded Security Maintenance for Applications is not enabled.

105 updates can be applied immediately.
61 of these updates are standard security updates.
To see these additional updates run: apt list --upgradable

Enable ESM Apps to receive additional future security updates.
See https://ubuntu.com/esm or run: sudo pro status


vagrant@ubuntu-jammy:~$ docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
vagrant@ubuntu-jammy:~$ docker --version
Docker version 24.0.4, build 3713ee1
vagrant@ubuntu-jammy:~$ 
```

-------------------------
# Conclusion

In this blog post, we covered the step-by-step process of installing Vagrant and VirtualBox on an Ubuntu VM running on Hyper-V. We also explored essential Vagrant commands and tested our setup with a sample Ubuntu box. With this setup, you can now efficiently manage your virtual development environments and streamline your workflow.

