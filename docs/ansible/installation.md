---
id: installation
title: Ansible installation
sidebar_label: Installation
---

Ansible allows you to manage remote servers (**nodes**) from your local machine (**control machine**).

So, to use Ansible you have to prepare _control machine_ and _nodes_.

> Your local machine can be _node_ and _control machine_ at the same time. So you can use Ansible to manage your
local machine too.

```uml
(Control\n machine) as C
note right of C : **Ansible**
(Node 1) as N1
note right of N1 : **Python**
(Node 2) as N2
note right of N2 : **Python**
C ---> N1 : ssh
C --> N2 : ssh
```

## Control machine

You have to install **Ansible** on control machine.

If you use Ubuntu you can install latest release via `apt`:

```bash
sudo apt-get update
sudo apt-get install software-properties-common
sudo apt-add-repository --yes --update ppa:ansible/ansible
sudo apt-get install ansible
```

## Node

You need ssh access to your **Node** machine.

Also `Python` have to be installed on *node* machine.

```bash
apt-get install python-minimal
```

## Links

- [Official documentation](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html)