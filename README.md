[comment]: <> "LTeX: language=en-US"
<!-- markdownlint-disable MD033 -->

<h1 align="center">
  Jimmi API Client
  <br />
</h1>

<h4 align="center">A typescript client for the jimmi rest api.</h4>

<p align="center">
  <a href="https://github.com/Music-Bot-for-Jitsi/jimmi-api-client/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/Music-Bot-for-Jitsi/jimmi-api-client" />
  </a>
  <a href="https://github.com/Music-Bot-for-Jitsi/jimmi-api-client/stargazers">
      <img src="https://img.shields.io/github/stars/Music-Bot-for-Jitsi/jimmi-api-client" />
  </a>
  <a href="https://github.com/Music-Bot-for-Jitsi/jimmi-api-client/issues">
    <img src="https://img.shields.io/github/issues/Music-Bot-for-Jitsi/jimmi-api-client" />
  </a>
</p>

<h3 align="center">🔒 SonarCloud Monitored</h3>
<p align="center">
  <a href="https://sonarcloud.io/summary/new_code?id=Music-Bot-for-Jitsi_jimmi-api-client">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=Music-Bot-for-Jitsi_jimmi-api-client&metric=alert_status" alt="Quality Gate Status" />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=Music-Bot-for-Jitsi_jimmi-api-client">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=Music-Bot-for-Jitsi_jimmi-api-client&metric=sqale_rating" alt="Maintainability Rating" />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=Music-Bot-for-Jitsi_jimmi-api-client">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=Music-Bot-for-Jitsi_jimmi-api-client&metric=reliability_rating" alt="Reliability Rating" />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=Music-Bot-for-Jitsi_jimmi-api-client">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=Music-Bot-for-Jitsi_jimmi-api-client&metric=security_rating" alt="Security Rating" />
  </a>
</p>
<p align="center">
  <a href="https://sonarcloud.io/summary/new_code?id=Music-Bot-for-Jitsi_jimmi-api-client">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=Music-Bot-for-Jitsi_jimmi-api-client&metric=ncloc" alt="Lines of Code" />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=Music-Bot-for-Jitsi_jimmi-api-client">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=Music-Bot-for-Jitsi_jimmi-api-client&metric=vulnerabilities" alt="Vulnerabilities" />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=Music-Bot-for-Jitsi_jimmi-api-client">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=Music-Bot-for-Jitsi_jimmi-api-client&metric=sqale_index" alt="Technical Debt" />
  </a>
</p>
<p align="center">
  <a href="https://sonarcloud.io/summary/new_code?id=Music-Bot-for-Jitsi_jimmi-api-client">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=Music-Bot-for-Jitsi_jimmi-api-client&metric=code_smells" alt="Code Smells" />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=Music-Bot-for-Jitsi_jimmi-api-client">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=Music-Bot-for-Jitsi_jimmi-api-client&metric=coverage" alt="Coverage" />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=Music-Bot-for-Jitsi_jimmi-api-client">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=Music-Bot-for-Jitsi_jimmi-api-client&metric=duplicated_lines_density" alt="Duplicated Lines (%)" />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=Music-Bot-for-Jitsi_jimmi-api-client">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=Music-Bot-for-Jitsi_jimmi-api-client&metric=bugs" alt="Bugs" />
  </a>
</p>

## Summary

This api client can be used to control the Jitsi Integrated Musicbot Management Interface 🥳

## Usage Example

```ts
import { api } from 'https://deno.land/x/jimmi-api-client/mod.ts';

const apiConfig = api.createConfiguration({
  baseServer: new api.ServerConfiguration('http://your.bot/api'),
});
const jimmiApi = new api.DefaultApi(apiConfig);
const instance = await jimmiApi.instancesPost();
```

For more information see [api documentation](https://github.com/Music-Bot-for-Jitsi/jimmi-api-client/blob/main/src/DefaultApi.md).
