import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from './components/greet.js'
import Welcome from './components/welcome';
import Message from './components/message.js'
import Counter from './components/counter.js'
import FunctionClick from './components/functionClick.js'
import EventHandler from './components/eventHandler.js'
import ParentComponent from './components/parentComponent.js'
import UserGreeting from './components/userGreeting.js'
import NameList from './components/nameList.js'
import Form from './components/form.js'
import LifecycleA from './components/LifecycleA.js'
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComponent';
import ParentComp from './components/ParentComp';
import MemoComp from './components/MemoComp';
import RefsDemo from './components/RefsDemo';
import FRparent from './components/FRparent';
import HookCounter from './components/HookCounter';
import Hookcounterthree from './components/Hookcounterthree';
import HookArray from './components/HookArray';
import HookEffect from './components/HookEffect';
import HookMouse from './components/HookMouse';
import Hookdisplay from './components/Hookdisplay';
import HookInterval from './components/HookInterval';

function App() {
  return (
    <div>
      <HookInterval/>
    </div>
  )
}

export default App;