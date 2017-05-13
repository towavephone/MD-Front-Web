var React = require('react');
var FlexSlider = require('../common/flexslider.jsx');
var Product = require('../common/product.jsx');
var Persons = require('./persons.jsx');
var Counter = require('./counter.jsx');
var animate = require('../toolers/animate');
var xhr = require('../toolers/xhr');
var helpers = require('../toolers/helpers');
var Index = React.createClass({
    getInitialState: function () {
        return {products: []};
    },
    getDefaultProps: function () {
        return {
            images: [
                'dist/images/首页.png',
                'dist/images/首页2.png',
                'dist/images/首页3.png',
                'dist/images/首页4.png'
            ],
            persons: [
                {
                    img: 'dist/images/李敬.jpg',
                    name: '李敬',
                    role: '董事长',
                    wisdom: '2002年开始，美登人一直专注于吸收性芯材的开发与应用。坚持同样的事情重复做，日复一日、年复一年。坚毅、认真、耐心、细致、坚持每天学习一点，每天持续改善一点，积以时日，我们终将汇聚涓流。'
                },
                {
                    img: 'dist/images/唐燕.jpg',
                    name: '唐燕',
                    role: '财务总监',
                    wisdom: '青年时准备好材料，想造一座通向月亮的桥，或者在地上造二所宫殿或庙宇。活到中年，终于决定搭一个棚。'
                },
                {
                    img: 'dist/images/任红英.jpg',
                    name: '任红英',
                    role: '总经理',
                    wisdom: '让青春反抗老朽，长发反抗秃头，热情反抗陈腐，未来反抗往昔，这是多么自然！'
                }
            ],
            counters: [
                {
                    icon: 'icon-globe',
                    maxNum: '100000',
                    key: '年产量（吨）'
                },
                {
                    icon: 'icon-user',
                    maxNum: '360',
                    key: '客户（位）'
                },
                {
                    icon: 'icon-shop',
                    maxNum: '700',
                    key: '产品（种）'
                },
                {
                    icon: 'icon-thumbs-up',
                    maxNum: '200',
                    key: '荣誉（项）'
                }
            ]
        };
    },
    componentDidMount: function () {
        this.getData();
    },
    getData: async function () {
        var ret = await xhr.get('/product', {is_home: 1});
        // let results = await Promise.all([xhr.get('/msg', null),xhr.get('/msg', null)]);
        console.log(ret);
        if (ret.result === false) {
            helpers.alert(ret.error_msg);
            return;
        }
        this.setState({products: ret.data}, function () {
            animate.allRun();
        });
    },
    render: function () {
        return (
            <div>
                <FlexSlider datas={this.props.images}/>
                <Product datas={this.state.products}/>
                <Persons datas={this.props.persons}/>
                <Counter datas={this.props.counters}/>
            </div>
        );
    }
});
module.exports = Index;
