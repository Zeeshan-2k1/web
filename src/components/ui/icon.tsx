// Icon.js
import React from 'react';
import {
  AmazonwebservicesOriginalWordmark,
  ArchlinuxOriginal,
  BootstrapOriginal,
  CplusplusOriginal,
  D3jsOriginal,
  DjangoPlain,
  DockerOriginal,
  ExpressOriginal,
  FigmaOriginal,
  FirebaseOriginal,
  GithubOriginal,
  JavaOriginal,
  JavascriptOriginal,
  JiraOriginal,
  JqueryOriginal,
  KubernetesOriginal,
  LuaOriginal,
  MongodbOriginal,
  MysqlOriginal,
  NestjsOriginal,
  NextjsOriginal,
  NodejsOriginal,
  PostgresqlOriginal,
  PythonPlain,
  ReactOriginal,
  RedisOriginal,
  ReduxOriginal,
  RustOriginal,
  SolidityOriginal,
  SpringOriginal,
  TailwindcssOriginal,
  ThreejsOriginal,
  TypescriptOriginal,
  WebpackOriginal,
} from 'devicons-react';

import { IconNames } from '@/lib/constant';

type Props = {
  name: keyof typeof IconNames;
  size?: number;
};

const Icon = ({ name, size = 56 }: Props) => {
  switch (name) {
    case IconNames.JAVASCRIPT:
      return <JavascriptOriginal color="white" size={size} />;
    case IconNames.PYTHON:
      return <PythonPlain size={size} />;
    case IconNames.CPP:
      return <CplusplusOriginal size={size} />;
    case IconNames.JAVA:
      return <JavaOriginal size={size} />;
    case IconNames.RUST:
      return <RustOriginal size={size} />;
    case IconNames.LUA:
      return <LuaOriginal size={size} />;
    case IconNames.TYPESCRIPT:
      return <TypescriptOriginal size={size} />;
    case IconNames.SOLIDITY:
      return <SolidityOriginal size={size} />;
    case IconNames.REACT:
      return <ReactOriginal size={size} />;
    case IconNames.NEXT:
      return <NextjsOriginal size={size} />;
    case IconNames.SPRINGBOOT:
      return <SpringOriginal size={size} />;
    case IconNames.EXPRESS:
      return <ExpressOriginal size={size} />;
    case IconNames.NODE:
      return <NodejsOriginal size={size} />;
    case IconNames.DJANGO:
      return <DjangoPlain size={size} />;
    case IconNames.REDUX:
      return <ReduxOriginal size={size} />;
    case IconNames.TAILWINDCSS:
      return <TailwindcssOriginal size={size} />;
    case IconNames.JQUERY:
      return <JqueryOriginal size={size} />;
    case IconNames.WEBPACK:
      return <WebpackOriginal size={size} />;
    case IconNames.D3:
      return <D3jsOriginal size={size} />;
    case IconNames.BOOTSTRAP:
      return <BootstrapOriginal size={size} />;
    case IconNames.NEST:
      return <NestjsOriginal size={size} />;
    case IconNames.THREEJS:
      return <ThreejsOriginal size={size} />;
    case IconNames.POSTGRES:
      return <PostgresqlOriginal size={size} />;
    case IconNames.MYSQL:
      return <MysqlOriginal size={size} />;
    case IconNames.MONGO:
      return <MongodbOriginal size={size} />;
    case IconNames.REDIS:
      return <RedisOriginal size={size} />;
    case IconNames.AWS:
      return <AmazonwebservicesOriginalWordmark size={size} />;
    case IconNames.FIREBASE:
      return <FirebaseOriginal size={size} />;
    case IconNames.ARCH:
      return <ArchlinuxOriginal size={size} />;
    case IconNames.GITHUB:
      return <GithubOriginal size={size} />;
    case IconNames.DOCKER:
      return <DockerOriginal size={size} />;
    case IconNames.K8S:
      return <KubernetesOriginal size={size} />;
    case IconNames.JIRA:
      return <JiraOriginal size={size} />;
    case IconNames.FIGMA:
      return <FigmaOriginal size={size} />;
    default:
      return null;
  }
};

export default Icon;
