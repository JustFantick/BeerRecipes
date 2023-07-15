import React from 'react'

export default function DeleteButton() {
	function onClick() {
		console.log('btn click');
	}
	return (
		<div className='delete-btn active' onClick={onClick}></div>
	)
}
