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
$ uname -a
Linux ThinkPad-X230.localdomain 3.9.6-301.fc19.x86_64 #1 SMP Mon Jun 17 14:26:26 UTC 2013 x86_64 x86_64 x86_64 GNU/Linux

# dmesg | grep sd
[135587.413741] sd 27:0:0:0: Attached scsi generic sg1 type 0
[135587.416697] sd 27:0:0:0: [sdb] 2007040 512-byte logical blocks: (1.02 GB/980 MiB)
[135587.418130] sd 27:0:0:0: [sdb] Write Protect is off
[135587.418140] sd 27:0:0:0: [sdb] Mode Sense: 03 00 00 00
[135587.418944] sd 27:0:0:0: [sdb] No Caching mode page present
[135587.418947] sd 27:0:0:0: [sdb] Assuming drive cache: write through
[135587.423205] sd 27:0:0:0: [sdb] No Caching mode page present
[135587.423211] sd 27:0:0:0: [sdb] Assuming drive cache: write through
[135587.424119]  sdb: sdb1 sdb2
[135587.428088] sd 27:0:0:0: [sdb] No Caching mode page present
[135587.428094] sd 27:0:0:0: [sdb] Assuming drive cache: write through
[135587.428098] sd 27:0:0:0: [sdb] Attached SCSI removable disk
[135588.336077] SELinux: initialized (dev sdb1, type iso9660), uses genfs_contexts

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

  ![](https://raw.github.com/ignatenkobrain/cssterm/master/demo.png)

## Substitution

  The following replacements will be made if found at the beginning of a line:
  
  - `lines that start with "#" will be treated as a root command`
  - `lines that start with "!" will be replaced as a comment`
  - `include line breaks by placing a space (" ") on an empty line`
  - `everything else treated as standard output`

##ToDo

1. Testing.. Testing.. Testing..

##Thanks

Big Thank-You to [Dom Briggs](http://cssdeck.com/user/hallodom) over at CSSDeck for his [Pure CSS OSX Terminal](http://cssdeck.com/labs/pure-css-osx-terminal) work

Big Thank-You to [Igor Gnatenko](https://github.com/ignatenkobrain) for his updates to this project!
