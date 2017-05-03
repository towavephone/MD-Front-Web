var React = require('react');
var HeadNav = React.createClass({
    displayName: 'HeadNav',
    getDefaultProps: function () {
        return {active_tab_url: location.hash, tabs_url: [location.hash]};
    },
    render: function () {
        var tabs = [];
        for (var i in this.props.tabs_url) {
            var item = this.props.tabs_url[i];
            var is_active = this.props.active_tab_url == item.url;
            var dropdown = [];
            var hasDropdown = Array.isArray(item.dropdown) && item.dropdown.length > 0;
            var className = is_active ? 'active' : '';
            var ul = null;
            if (hasDropdown) {
                for (var j in item.dropdown) {
                    var item2 = item.dropdown[j];
                    dropdown.push(<li key={j}><a href={item2.url}>{item2.name}</a></li>);
                }
                className += ' has-dropdown';
                ul = <ul className="dropdown">
                    {dropdown}
                </ul>;
            }
            tabs.push(<li key={i} className={className}>
                    <a href={is_active ? 'javascript:void(0)' : item.url}>{item.name}</a>{ul}
                </li>);
        }
        return (
            <ul>{tabs}</ul>
        );
    }
});

module.exports = HeadNav;
