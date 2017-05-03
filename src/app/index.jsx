var React = require('react');
var FlexSlider = require('../common/flexslider.jsx');
var Product = require('../common/product.jsx');
var OwlCarousel = require('./owl-carousel.jsx');
var Counter = require('./counter.jsx');
var Index = React.createClass({
    getDefaultProps: function () {
        return {
            images: [
                'dist/images/首页.png',
                'dist/images/首页2.png',
                'dist/images/首页3.png',
                'dist/images/首页4.png'
            ],
            products: [
                {
                    img: 'dist/images/MD-B1.jpg',
                    name: '扩散速渗型（卫生巾芯体）',
                    spec: 'MD-B1'
                },
                {
                    img: 'dist/images/MD-B2.jpg',
                    name: '速渗型（尿片芯体）',
                    spec: 'MD-B2'
                },
                {
                    img: 'dist/images/MD-B3.jpg',
                    name: '扩散干爽型（尿库芯体）',
                    spec: 'MD-B3'
                }
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
                    wisdom: '青年时准备好材料，想造一座通向月亮的桥，或者在地上造二所宫殿或庙宇。活到中年，终于决定搭一个棚。青年时准备好材料，想造一座通向月亮的桥，或者在地上造二所宫殿或庙宇。活到中年，终于决定搭一个棚青年时准备好材料，想造一座通向月亮的桥，或者在地上造二所宫殿或庙宇。活到中年，终于决定搭一个棚青年时准备好材料，想造一座通向月亮的桥，或者在地上造二所宫殿或庙宇。活到中年，终于决定搭一个棚青年时准备好材料，想造一座通向月亮的桥，或者在地上造二所宫殿或庙宇。活到中年，终于决定搭一个棚'
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
                    maxNum: '26000',
                    key: '年产量'
                },
                {
                    icon: 'icon-user',
                    maxNum: '120',
                    key: '客户'
                },
                {
                    icon: 'icon-shop',
                    maxNum: '700',
                    key: '产品'
                },
                {
                    icon: 'icon-thumbs-up',
                    maxNum: '200',
                    key: '荣誉'
                }
            ]
        };
    },
    render: function () {
        return (
            <div>
                <FlexSlider datas={this.props.images}/>
                <Product datas={this.props.products}/>
                <OwlCarousel datas={this.props.persons}/>
                <Counter datas={this.props.counters}/>
            </div>
        );
    }
});
module.exports = Index;
