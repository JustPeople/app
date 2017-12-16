import React from 'react'
import { Link } from 'react-router-dom'

export default props => {
    return (
        <div>
            <div>Home</div>
            <div>
                <div>
                    <Link to="/profiles" children={'Profiles'} />
                </div>
                <div>
                    <Link to="/" children={'Home'} />
                </div>
            </div>
        </div>
    )
}
