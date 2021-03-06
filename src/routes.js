import React from 'react';
import Home from './components/Home/Home';
import Build from './components/HowBuild/Build';
import PcCompleted from './components/PcCompleted/PcCompleted';
import StartBuild from './components/StartBuild/StartBuild';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import { Switch, Route } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import BtnPcCompleted from './components/BtnPcCompleted/BtnPcCompleted';
import AdminsThings from './components/AdminThings/AdminsThings';
import Cart from './components/Cart/Cart';
import Cpu from './components/Cpu/Cpu';
import CpuCooler from './components/CpuCooler/CpuCooler';
import Motherboard from './components/Motherboard/Motherboard';
import Memory from './components/Memory/Memory';
import Storage from './components/Storage/Storage';
import VideoCard from './components/VideoCard/VideoCard';
import Case from './components/Case/Case';
import PowerSupply from './components/PowerSupply/PowerSupply';
import Monitor from './components/Monitor/Monitor';
import Checkout from './components/Checkout/Checkout';
import Item from './components/Item/Item';
import ItemTwo from './components/ItemTwo/ItemTwo';
import ItemThree from './components/ItemThree/ItemThree';
import ItemFour from './components/ItemFour/ItemFour';
import ItemFive from './components/ItemFive/ItemFive';
import ItemSix from './components/ItemSix/ItemSix';
import ItemSeven from './components/ItemSeven/ItemSeven';
import ItemEight from './components/ItemEight/ItemEight';
import ItemNine from './components/ItemNine/ItemNine';
export default (
	<Switch>
		<Route path="/itemnine/:id" component={ItemNine} />
		<Route path="/itemeight/:id" component={ItemEight} />
		<Route path="/itemseven/:id" component={ItemSeven} />
		<Route path="/itemsix/:id" component={ItemSix} />
		<Route path="/itemfive/:id" component={ItemFive} />
		<Route path="/itemfour/:id" component={ItemFour} />
		<Route path="/itemthree/:id" component={ItemThree} />
		<Route path="/itemtwo/:id" component={ItemTwo} />
		<Route path="/item/:id" component={Item} />
		<Route path="/checkout" component={Checkout} />
		<Route path="/monitor" component={Monitor} />
		<Route path="/powersupply" component={PowerSupply} />
		<Route path="/case" component={Case} />
		<Route path="/videocard" component={VideoCard} />
		<Route path="/storage" component={Storage} />
		<Route path="/memory" component={Memory} />
		<Route path="/motherboard" component={Motherboard} />
		<Route path="/cpucooler" component={CpuCooler} />
		<Route path="/cpu" component={Cpu} />
		<Route path="/cart" component={Cart} />
		<Route path="/adminsthings" component={AdminsThings} />
		<Route path="/btnpccompleted" component={BtnPcCompleted} />
		<Route path="/admin" component={Admin} />
		<Route path="/profile" component={Profile} />
		<Route path="/register" component={Register} />
		<Route path="/login" component={Login} />
		<Route path="/pccompleted" component={PcCompleted} />
		<Route path="/build" component={Build} />
		<Route path="/startbuild" component={StartBuild} />
		<Route exact path="/" component={Home} />
	</Switch>
);
