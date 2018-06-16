---
title: "How to reinstall plugin from jenkins  "
cover: "https://unsplash.it/1152/300/?computer?image=3"
category: "Devops"
date: "10/03/2018"
tags:
    - Devops
---

Jenkins is one of the widely used and popular CI/CD software. When I started using Jenkins, the one thing that bugged me was uninstalling the plugins. Previously, I had to go to plugins directory to delete a plugin. Today, although Jenkins have provided uninstall button it does not work properly. I had to wait hours to get it uninstalled. Sometimes it does not even get deleted. So, if you are finding hard to uninstall an unwanted plugin from Jenkins , follow these simple steps.

Go to the jenkins plugin directory, located at
```
cd <jenkinsHome>/plugins/
```

Delete the plugin directory. You have successfully uninstalled the plugin.

To reinstall the plugin,

Go to, <a href="https://updates.jenkins-ci.org/download/plugins/slack/" target="_blank">https://updates.jenkins-ci.org/download/plugins/slack/</a> and download .hpi file.


</br>

Now, on the Jenkins page, go to 

a) Manage Jenkins -> Manage plugins

b) Under upload plugin section, click advanced tab.

c) Choose file and click upload button.

d) Restart Jenkins to see the changes.