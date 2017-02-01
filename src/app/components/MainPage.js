import React from 'react';
import Link from 'react-router/lib/Link';

export default function MainPage() {
    return (
        <div>
            <h1>Crappin beautiful main page!</h1>
            <Link to="/counter">
                <button>
                    See counter
                </button>
            </Link>
            <Link to="/exchanger">
                <button>
                    See exchanger
                </button>
            </Link>
        </div>
    );
}
