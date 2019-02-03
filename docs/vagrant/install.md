---
id: install
title: Install Vagrant
sidebar_label: Install
---

In this tutorial we will discuss how to install Vagrant, create `Vagrantfile` and manage Vagrant boxes.

## Install VirtualBox and Vagrant:

Because Vagrant uses VirtualBox to manage virtual machines, we need to install them locally.

```bash
sudo apt-get install virtualbox vagrant
```

## Generate private and public ssh keys

We need to create generate private and public ssh keys to inject them into virtual machines managed by Vagrant.

```bash
ssh-keygen -t rsa -C "youremail@example.com"
```

## Create `Vagrantfile`

To tell Vagrant how to create virtual machine we need to create configuration file (Vagrantfile). 

```ruby
# -*- mode: ruby -*-
# vi: set ft=ruby :

# we use last version of Vagrant API
API_VERSION = "2"
# base image for virtual machine
BOX_NAME    = "centos/7"
# private IP address of the machine
BOX_IP      = "192.168.50.4"
DOMAIN      = "nip.io"
PRIVATE_KEY = "~/.ssh/id_rsa"
# will be injected to the host so we can access it
PUBLIC_KEY  = '~/.ssh/id_rsa.pub'

Vagrant.configure(API_VERSION) do |config|
  config.vm.box = BOX_NAME
  config.vm.network "private_network", ip: BOX_IP
  config.vm.host_name = BOX_IP + '.' + DOMAIN
  config.ssh.insert_key = false
  config.ssh.private_key_path = [PRIVATE_KEY, "~/.vagrant.d/insecure_private_key"]
  config.vm.provision "file", source: PUBLIC_KEY, destination: "~/.ssh/authorized_keys"

  config.vm.provider "virtualbox" do |v|
    v.memory = "2024"
    v.cpus = "2"
  end

end
```

> We use `centos/7` image. You can find other images at [Vagrant Cloud](https://app.vagrantup.com/boxes/search).

## Launch Vagrant box

> **Vagrant Box** - synonym for **virtual machine** - prepackaged development environments that is the foundation of Vagrant.

Run virtual machine using created `Vagrantfile`.

```bash
vagrant up
``` 

## Enter to virtual machine

```bash
ssh vagrant@192.168.50.4.nip.io
```

## Stop virtual machine

When you finish working with virtual machine you can `halt` it. This command gracefully shut down the guest operating
system and power down the guest machine.

```bash
vagrant halt
```

## Check virtual machine status

To check virtual machine status you can use `status command`

```bash
vagrant status
```

## Destroy virtual machine

If you want completely delete virtual machine from your environment use `destroy` command.  It'll stop the guest
machine, power it down, and remove all of the guest hard disks.

```bash
vagrant destroy
```

## Links

- [Official documentation](https://www.vagrantup.com/intro/getting-started/install.html)