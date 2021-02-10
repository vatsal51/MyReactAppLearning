import logo from './logo.svg';
import './App.css';
import Greet from "./components/Greet"
import Welcome from "./components/Wecome"
import Hello from "./components/Hello"
import Message from "./components/Message"
import Counter from "./components/Counter"
import FunctionClick from "./components/FunctionClicks"
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet'
import Form from './components/Form';
import LifecycleA from './components/lifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from "./components/Hero";
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Counter2 from './components/Counter2';
function App() {
	return (
		<div className="App">
			<Counter2>
			{(count, incrementCount) => (
					<ClickCounterTwo count={count} incrementCount={incrementCount} />
				)}
			</Counter2>

			<Counter2>
			{(count, incrementCount) => (
					<HoverCounterTwo count={count} incrementCount={incrementCount} />
				)}
			</Counter2>
			{/* <ClickCounterTwo />
			<HoverCounterTwo />
			<User render={ (isLoggedIn)  => isLoggedIn ? "Vatsal" : "Guest"}/> */}
			{/* <ClickCounter name="vatsal" />
			<HoverCounter/> */}
			{/* <ErrorBoundary>
				<Hero heroName="Batman" />
			</ErrorBoundary>
			<ErrorBoundary>
				<Hero heroName="WW" />
			</ErrorBoundary>
			<ErrorBoundary>
				<Hero heroName="Joker" />
			</ErrorBoundary> */}
			{/* <PortalDemo /> */}
			{/* <FRParentInput /> */}
			{/* <FocusInput /> */}
			{/* <RefsDemo /> */}
			{/* <ParentComp /> */}
			{/* <PureComp /> */}
			{/* <Table /> */}
			{/* <FragmentDemo /> */}
			{/* <LifecycleA /> */}
			{/* <Form /> */}
			{/* <Stylesheet primary={true} />
        <NameList/>
        <ParentComponent/>
       <EventBind/>
        <ClassClick/>
        <FunctionClick />
        <Counter />
        <Message />
        <Hello />
        <Greet name="Vatsal" />
        <Greet name="JAck" />
        <Greet name="Ripper" />

        <Welcome name="Vatsal" />
        <Welcome name="jack" />
        <Welcome name="ripper" /> */}

		</div>
	);
}

export default App;
