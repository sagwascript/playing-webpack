import React from 'react'
import { render } from 'react-dom'
import Hello from './components/Hello'
import SaySomething from './components/SaySomething'
import { addition } from './utils/'
import './css/common.scss'
import webpackIcon from './assets/webpack.svg'

const cats = require('./cats.json')

render(
	<div>
		<img
			src={webpackIcon}
			alt="webpack-logo"
			style={{ height: 100, width: 125 }}
		/>
		<Hello greetings="Hi, good morning!" name="Alex" />
		<SaySomething text="How are you?" />
		<button className="btn btn-primary btn-md">Take the tour</button>
	</div>,
	document.getElementById('root')
)
