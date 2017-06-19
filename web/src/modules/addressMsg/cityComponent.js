import './AddressMsgComponent.scss'


var React = require('react');

var City = React.createClass({
    json: window.__CITY__,
    style: {
        margin: "0 3px",
        padding: "2px 6px",
        fontSize: "14px"
    },
    provinceOption: function(){
        return this.json.map(function(array, index){
            return (<option key={index} data-index={index}>{array.name}</option>);
        });
    },
    cityOption: function(){
        if(this.index.provinceIndex == -1){
            return false;
        }else{
            return this.json[this.index.provinceIndex].city.map(function(array, index){
                return (<option key={index} data-index={index}>{array.name}</option>);
            });
        }
    },
    countyOption: function(){
        if(this.index.cityIndex == -1){
            return false;
        }else{
            return this.json[this.index.provinceIndex].city[this.index.cityIndex].area.map(function(array, index){
                return (<option key={index} data-index={index}>{array}</option>);
            });
        }
    },
    index: {
        provinceIndex: -1,
        cityIndex: -1
    },
    getInitialState: function(){
        return ({
            city: this.cityOption(),
            county: this.countyOption()
        });
    },
    provinceChange: function(event){
        var e = event.target;
        this.index.provinceIndex = e.options[e.selectedIndex].getAttribute("data-index");
        this.index.cityIndex = -1;
        this.setState({
            city: this.cityOption(),
            county: this.countyOption()
        });
        this.refs.city.value = "-1";
        this.refs.county.value = "-1";
    },
    cityChange: function(event){
        var e = event.target;
        this.index.cityIndex = e.options[e.selectedIndex].getAttribute("data-index");
        this.setState({
            county: this.countyOption()
        });
        this.refs.county.value = "-1";
    },
    getAddressFromOption:function(){
        var _sheng = this.refs.sheng.value;
        var _city = this.refs.city.value;
        var _county = this.refs.county.value;
        
        window.sessionStorage.setItem("sheng",_sheng)
        window.sessionStorage.setItem("city",_city)
        window.sessionStorage.setItem("county",_county)
        //console.log(window.sessionStorage.getItem("sheng"))
        //console.log(window.sessionStorage.getItem("city"))
        //console.log(window.sessionStorage.getItem("county"))
    },
    componentDidMount(){
        window.sessionStorage.setItem("sheng",'-1')
        window.sessionStorage.setItem("city",'-1')
        window.sessionStorage.setItem("county",'-1')
        // window.sessionStorage.removeItem("sheng")
        // window.sessionStorage.removeItem("city")
        // window.sessionStorage.removeItem("county")

    },
    render: function(){
        return (
                <div>
                    <li className="addressMsgLi">
                        <select name={this.props.provinceName ? this.props.provinceName : "province"} style={this.style} onChange={this.provinceChange} ref = "sheng" className="sheng" onBlur={this.getAddressFromOption.bind(this)}>
                            <option key="-1" value="-1" data-index="-1">省份</option>
                            {this.provinceOption()}
                        </select>
                    </li>
                    <li className="addressMsgLi">
                        <select name={this.props.cityName ? this.props.cityName : "city"} style={this.style} onChange={this.cityChange} ref="city" className="usercity" onBlur={this.getAddressFromOption.bind(this)}>
                            <option key="-1" value="-1" data-index="-1">地级市</option>
                            {this.state.city}
                        </select>
                    </li>
                    <li className="addressMsgLi">
                    <select name={this.props.countyName ? this.props.countyName : "county"} style={this.style} ref="county" className="userqu" onBlur={this.getAddressFromOption.bind(this)}>
                        <option key="-1" value="-1" data-index="-1">市、县级市</option>
                        {this.state.county}
                    </select>
                    </li>
                </div>
        )
    }
})

module.exports=City