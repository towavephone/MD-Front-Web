var React = require('react');
var FlexSlider = require('../common/flexslider.jsx');
var Staffs = require('./staffs.jsx');
var Index = React.createClass({
    getDefaultProps: function () {
        return {
            images: [
                'dist/images/公司介绍.png',
                'dist/images/公司介绍2.png',
                'dist/images/公司介绍3.png'
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
            ]
        };
    },
    render: function () {
        return (
            <div>
                <FlexSlider datas={this.props.images}/>
                <div id="fh5co-about">
                    <div className="container">
                        <div className="about-content">
                            <div className="row animate-box">
                                <div className="col-md-6">
                                    <div className="desc">
                                        <h3>公司简介</h3>
                                        <p>广东美登纸业有限公司是一家集研发、设计、生产、销售卫生复合纸、膨化复合纸、湿强纸及高分子等为一体的现代化专业纸品生产企业，广东美登企业旗下设分公司佛山华亨卫生材料有限公司！公司自创立以来就面对市场日益激烈的竞争，凭着以质求存的服务取得了国内外广大消费者的一致信任与支持。</p> 
                                        <p>目前，公司占地35亩，厂房20000平方米，拥有国内先进生产设备16条，生产能力达每年10万吨，公司采用先进科学的生产及质量检测方法，对生产现场、制作流程等各个环节均进行严格的控制管理，使生产的每一件产品都有过硬的质量保证。目前，产品有纸尿裤超薄材料、卫生巾超薄吸水材料、木浆复合材料、膨化复合吸水材料、无纺布复合吸水纸及其他材料复合产品。</p>
                                        <p>本公司技术雄厚，生产设备先进，质保体系完善，服务质量优秀，产品规格齐全，质优价平，档次各异，尽心追求完美，与时俱进，精益求精，产品的质量和良好的服务领先市场，博得新老客户的厚爱。</p>
                                    </div>
                                    <div className="desc">
                                        <h3>任务 &amp; 愿景</h3>
                                        <p>公司拥有一支技术专业、经验丰富、知识化、年轻化的自主研发、生产、管理和市场营销的精英团队，是国内干法造纸及高吸收性SAP复合纸芯体研发、生产、销售于一体的产业基地。公司致力以“做最受国际尊敬的纸品企业/成为最具有国际性竞争力的企业”的企业愿景，为客户提供优质的产品。</p> 
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <img className="img-responsive" src="dist/images/厂门口.png" alt="about"/>
                                </div>
                            </div>
                        </div>
                        <div className="row animate-box">
                            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                                <span>员工写照</span>
                                <h2>遇见我们团队</h2>
                                <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                            </div>
                        </div>
                        <Staffs datas={this.props.persons}/>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = Index;
