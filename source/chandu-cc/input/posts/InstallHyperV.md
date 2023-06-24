Title: Hyper-V on Windows
Description: Install/Enable Hyper-V on Windows
Lead: Enable Hyper-v on windows
Tags: [hyper-v,virtualization,Windows]
IsPost: true
Image: hyper-v.png
By: Chandra kanth
Published:
---

# Enabling Hyper-V on windows

> Before getting started, you can also follow the [Microsoft documentation](https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v#check-requirements) for up-to-date information on Hyper-V. 

I am posting this as part of a series of tutorials/blog posts about using Hyper-V.

*Notes*

Hyper-V can be enabled in Windows 11 using the PowerShell command:

**Command:**

> Get-WindowsOptionalFeature -FeatureName Microsoft -Hyper-V-ALL -Online

Output: 

```
    FeatureName      : Microsoft-Hyper-V-All
    DisplayName      : Hyper-V
    Description      : Provides services and management tools for creating and running virtual machines and their
                    resources.
    RestartRequired  : Possible
    State            : Disabled
    CustomProperties :
```

-------------------------

## Enabel it with the Below Command

**command :**

> Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All


You should see  in your powershell something like this.

<a href="https://imgur.com/QY5IRgd"><img src="https://i.imgur.com/QY5IRgd.png" title="source: imgur.com" /></a>


------------------------- 

After enabling Hyper-V on windows 11 we can run the command that checks if the hyper-v enabled, When you run that command it should look something like 

**command:**
>  Get-WindowsOptionalFeature  -FeatureName Microsoft-Hyper-V-ALL -Online


<a href="https://imgur.com/Sodm2zX"><img src="https://i.imgur.com/Sodm2zX.png" title="source: imgur.com" /></a>

-------------------------
## Quick create

Now we can create a hyper-v virtual machines from the hyper-v manager. The easiest way to create a hyper-v is from a quick create menu from actions. 

<a href="https://imgur.com/6nxlzxE"><img src="https://i.imgur.com/6nxlzxE.png" title="source: imgur.com" /></a>

-------------------------
## Pick OS

You can create windows or ubuntu based on your needs, The screen just highlights windows 11 dev environment. I installed both windows and ubuntu hyper-v virtual machine on my pc for my needs. 

<a href="https://imgur.com/sGeABXp"><img src="https://i.imgur.com/sGeABXp.png" title="source: imgur.com" /></a>

-------------------------
## Enhanced mode

Make sure you have enhanced mode enabled. 

<a href="https://imgur.com/QQxLKih"><img src="https://i.imgur.com/QQxLKih.png" title="source: imgur.com" /></a>

-------------------------

## Allocate Ram

<a href="https://imgur.com/ZszFk69"><img src="https://i.imgur.com/ZszFk69.png" title="source: imgur.com" /></a>

-------------------------

## Allocate CPU Cores

<a href="https://imgur.com/DjKaSVQ"><img src="https://i.imgur.com/DjKaSVQ.png" title="source: imgur.com" /></a>

-------------------------

## Network

Make sure you are in some sort of custom network adapter so that you can access the internet from the virtual machine.

<a href="https://imgur.com/uCBh2n6"><img src="https://i.imgur.com/uCBh2n6.png" title="source: imgur.com" /></a>

-------------------------

# Enabling nested virtualization in hyper-v

With nested virtualization we can run virtual machine inside another virtual machine how this is useful you may ask. We can run docker or vagrant to setup a cluster to playaround. So this will become a excellent tool for learning. 

> You can also follow microsoft documentation from here. [Microsoft documentation](https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/user-guide/nested-virtualization).

Verify if the virtual machine enabled with nested virtual virtualization.

**Command:**
> Get-VMProcessor -VMName Ubuntu-22.04-LTS | format-List *

You should see something like this. 

> ExposeVirtualizationExtensions               : True

Virutilzation extensions is what we need to take note of. 

<a href="https://imgur.com/2b9U8T2"><img src="https://i.imgur.com/2b9U8T2.png" title="source: imgur.com" /></a>

-------------------------

To enable nested virtualization use below command, Make sure your virtual machine name is correct. 

> Set-VMProcessor -VMName <VMName> -ExposeVirtualizationExtensions $true

-------------------------

Once we have completed all the setup mentioned above, we can proceed with the installation of Vagrant on the Ubuntu box. This will allow us to create a cluster of machines consisting of one master node and two worker nodes. I will provide a detailed guide on how to set up the cluster in my next blog post.