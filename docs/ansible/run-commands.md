---
id: run-commands
title: Run commands
sidebar_label: Run commands
---

To run commands on remote hosts you need to know this information:
- remote node **host**;
- **user** to run Ansible commands on the node;
- **command** to run;

```uml
(Control\n machine) as C
(Node) as N
note right of C : host
note left of C : user
C --> N : command
```

## Ad-Hoc commands

The simplest way to run something on remote host is use **Ad-Hoc commands**.

Let's look at following command:

```
ansible all --inventory 192.168.50.2.nip.io, --user vagrant --module-name ping
```

Short analog:

```
ansible all -i 192.168.50.2.nip.io, -u vagrant -m ping
```

- `ansible` - utility that runs commands;
- `--inventory, -i` - host of remote machine or inventory file;
- `--user, -u` - user to run Ansible commands on the node;
- `--module-name, -m` - module - command or bunch of commands that are executed on the host;

This command executes on `192.168.50.2.nip.io` host by user `vagrant`.

`ping` module checks that host is accessible and has Python installed.

After execution of this command you will get response:

```
192.168.50.2.nip.io | SUCCESS => {
    "changed": false, 
    "ping": "pong"
}
```

## Inventory files

You can store information about user and host in **inventory file** so you shouldn't use them in
bash command explicitly.

```uml
(Inventory\n file) as IF
(Control\n machine) as CM
(Node) as N
note right of IF : host
note left of IF : user
IF --> CM
CM --> N : command
```

Create file `inventory.ini` with content:
```
vagrant ansible_host=192.168.50.2.nip.io ansible_user=vagrant
```

In this file you set user, host and name for remote host.

So you can use this name in bash command instead of `hostname`:

```
ansible vagrant -i inventory.ini -m ping
```

## Playbooks

If you want to run multiple commands you can use **playbooks** instead of ad-hoc commands.

```uml
(Inventory\n file) as IF
(Playbook) as PB
(Control\n machine) as CM
(Node) as N
note left of IF : user
note top of IF : host
note right of PB : commands
PB --> CM
IF --> CM
CM --> N : commands
```

We will create playbook to combine two modules: `ping` and `setup`. `setup` module outputs information about host.

Create `gather-info.yml` file with content:

    ---

    - hosts: vagrant
      gather_facts: true
      become: yes
      tasks:
        - name: Ping host
          ping:
        - name: Gather information
          setup:

Run playbook with command:

```bash
ansible-playbook -i inventory.ini gather-info.yml
```