import React from 'react'

export default function Hello(props) {
	return (
		<h1>
			{props.greetings} {props.name}
		</h1>
	)
}
