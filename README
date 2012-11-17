# CSSTerm

  Easy method to display a linux terminal on a webpage using pure CSS, powered by jQuery.

## Installation

    Place css and javascript files into your existing webpage, including a copy of jQuery

```html

<head>
<link rel="stylesheet" type="text/css" href="css/cssterm.css">
<script src="http://code.jquery.com/jquery-latest.js"></script>
<script src="scripts/cssterm.js"></script>
</head>
```

## Example

Full Terminal Window html:

```html
<div class="cssterm">
! find the secondary drive that you wish to create a new filesystem on
# dmesg|grep sd
SCSI device sdb: 143374650 512-byte hdwr sectors (73408 MB)
sdb: Write Protect is off
sdb: Mode Sense: bf 00 10 08
 
! if you are certain this is the drive to use, begin the creation
# mkfs.ext4 /dev/sdb1 
mke2fs 1.41.12 (17-May-2010)
Filesystem label=
OS type: Linux
Block size=4096 (log=2)
Fragment size=4096 (log=2)
Stride=0 blocks, Stripe width=0 blocks
245280 inodes, 979456 blocks
48972 blocks (5.00%) reserved for the super user
First data block=0
Maximum filesystem blocks=1006632960
30 block groups
32768 blocks per group, 32768 fragments per group
8176 inodes per group
Superblock backups stored on blocks: 
 32768, 98304, 163840, 229376, 294912, 819200, 884736
 
Writing inode tables: done                            
Creating journal (16384 blocks): done
Writing superblocks and filesystem accounting information: done
 
This filesystem will be automatically checked every 20 mounts or
180 days, whichever comes first.  Use tune2fs -c or -i to override.

</div>

```

output:

  ![](http://manipulate.org/downloads/cssterm/demos/cssterm-full-terminal.png)

Simple one-liner command html:

```html
<div id="cssterm-oneliner">Text to be replaced as a command</div>
```

output:

  ![](http://manipulate.org/downloads/cssterm/demos/cssterm-one-liner.png)

## Substitution

  The following replacements will be made if found at the beginning of a line:
  
  - `lines that start with "#" will be treated as a root command`
  - `lines that start with "!" will be replaced as a comment`
  - `include line breaks by placing a space (" ") on an empty line`
  - `everything else treated as standard output`

##ToDo

1. Add OSX-Terminal variant
2. Look for better fonts
3. Breakout jQuery to avoid collisions with existing implementation
