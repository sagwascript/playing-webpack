import React from 'react'

export default function SaySomething(props) {
	return (
		<div className="say-something">
			<img src="../assets/user.png" alt="user-image" />
			<h1>{props.text}</h1>
		</div>
	)
}
