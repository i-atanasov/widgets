import React from "react";

const Link = ({ className, href, children }) => {
    const onClick = (e) => {
        //allow for new tab with control + click
        if (e.metaKey || e.ctrlKey) {
            return;
        };

        e.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return <a onClick={onClick} className={className} href={href}>{children}</a>
}

export default Link;