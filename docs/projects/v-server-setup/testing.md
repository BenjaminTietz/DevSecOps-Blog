---
id: testing-and-validation
title: Testing and Validation
sidebar_label: Testing and Validation
sidebar_position: 3
---

import GithubLinkAdmonition from '@site/src/components/GithubLinkAdmonition';

<GithubLinkAdmonition link="https://github.com/BenjaminTietz/v-server-setup" text="Github Repository" type="info">
**Reach me out via** [LinkedIn](https://www.linkedin.com/in/benjamin-tietz/)**,** [Portfolio Contact Form](https://benjamin-tietz.com/#contactMe) **or** [Drop me a mail](mailto:mail@benjamin-tietz.com)
</GithubLinkAdmonition>

### SSH Access

- Ensure you can log in with SSH keys only:
  ```sh
  ssh user@your-server-ip
  ```
- Verify password authentication is disabled:
  ```sh
  ssh -o PubKeyAuthentication=no -i ~/.ssh/id_rsa user@your-server-ip
  ```
  This should fail.

#### NGINX Validation

- Check if your server is reachable via browser.
- Validate configuration:
  ```sh
  sudo nginx -t
  ```
- Restart NGINX if necessary:
  ```sh
  sudo systemctl restart nginx
  ```
