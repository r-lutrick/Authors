import React, { useState } from 'react'

const DisplayAll = (props) => {

    return (
        <div className='container'>
            <div className="card">
                <div className="card-body">
                    <h4 className='card-title'>Card Title</h4>
                    <h6 className='card-subtitle mb-2 text-muted'>Subtitle</h6>
                    <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nam atque vero aliquid temporibus perferendis eaque? Iusto est fuga sapiente quia quas, corrupti veritatis odit ab voluptas molestias harum iste.</p>
                </div>
            </div>

            {
                props.authors.map((auth, i) => {
                    return (
                        <div className="card">
                            <div className="card-header">
                                <h1>
                                    Author
                                </h1>
                            </div>
                            <div className="card-body">
                                <p>
                                    {auth.name}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayAll