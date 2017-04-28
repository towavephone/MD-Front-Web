var React = require('react');
var LeftSide = React.createClass({
    click: function () {
        this.props.jump('skus', null);
    },
    render: function () {
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
                        </div>
                        <div className="pull-left info">
                            <p>Alexander Pierce</p>
                            <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>
                    <div className="sidebar-form">
                        <div className="input-group">
                            <input type="text" name="q" className="form-control" placeholder="Search..." value=""/>
                            <span className="input-group-btn">
                                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                    <ul className="sidebar-menu">
                        <li className="treeview active">
                            <a href="#">
                                <i className="fa fa-shopping-cart"></i>
                                <span>商品管理</span>
                                <i className="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="#goods/simple_goods_list">线上商品</a></li>
                                <li><a href="#goods/home_rank/index">首页排位</a></li>
                                <li><a href="#goods/self_list">创建商品</a></li>
                                <li><a href="#goods/goods_check_list">商品审核</a></li>
                                <li><a href="#goods/goods_blacklist">商品黑名单</a></li>
                                <li><a href="#goods/goods_recommend/index">关联商品推荐</a></li>
                                <li><a href="#goods/category/goods_list/index">商品分类</a></li>
                                <li><a href="#goods/category/label_list/index">标签分类</a></li>
                                <li><a href="#goods/shield_goods">商品屏蔽</a></li>
                                <li><a href="#goods/operate_log/index">操作日志</a></li>
                                <li><a href="#goods/fake/index">假货管理</a></li>
                                <li><a href="#goods/exempt_check/index">免审管理</a></li>
                                <li><a href="#goods/exempt_check_sampling/index">免审抽检</a></li>
                                <li><a href="#goods/goods_quality_check/index">商品质量检查</a></li>
                                <li><a href="#goods/homelabel/index">顶部标签配置</a></li>
                                <li><a href="#goods/goods_grey_management/index">商品灰名单</a></li>
                                <li><a href="#goods/sample_management/index">样品管理</a></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-gift"></i>
                                <span>活动专题</span>
                                <i className="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="#goods/promotion/list">专题列表</a></li>
                                <li><a href="#goods/tweets_list">推文列表</a></li>
                                <li><a href="#goods/lucky_list/index">抽奖管理</a></li>
                                <li><a href="#goods/super_brand_list">超值大牌管理</a></li>
                                <li><a href="#goods/free_coupon_event_list">团长免单</a></li>
                                <li><a href="#goods/app_enjoy">APP专享团</a></li>
                                <li><a href="#system/weixinUrl">关注设置</a></li>
                                <li><a href="#activity/market/push">客服营销推送</a></li>
                                <li><a href="#activity/resource-niche/demand">资源位查询</a></li>
                                <li><a href="#activity/secondkill/index">秒杀配置</a></li>
                                <li><a href="#activity/hot_shop/index">热销店铺</a></li>
                                <li><a href="#activity/netease/list">网易新闻审核</a></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-th"></i>
                                <span>店铺管理</span>
                                <i className="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="#mall/mall_list">店铺列表</a></li>
                                <li><a href="#mall/check/list">商家/店铺信息审核</a></li>
                                <li><a href="#mall/mall_punishment">店铺惩罚</a></li>
                                <li><a href="#mall/mall_close/mall_close_audit">关店审核</a></li>
                                <li><a href="#mall/mall_service">店铺客服质量</a></li>
                                <li><a href="#mall/mall_balance">店铺资金</a></li>
                                <li><a href="#mall/mall_balance_frozen">店铺资金冻结</a></li>
                                <li><a href="#mall/withdraw_blacklist/all_type">提现黑名单</a></li>
                                <li><a href="#mall/mall_protocol">店铺协议</a></li>
                                <li><a href="#mall/message/list">站内信</a></li>
                                <li><a href="#mall/mall_black_list/list">店铺黑名单</a></li>
                                <li><a href="#mall/rules/tab">规则中心</a></li>
                                <li><a href="#mall/training_platform/index">商家培训平台</a></li>
                                <li><a href="#mall/withdraw_grey_list/list">提现灰名单</a></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-reorder"></i>
                                <span>订单管理</span>
                                <i className="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="#order/order_list/index">订单查询</a></li>
                                <li><a href="#order/orders_export">订单导出</a></li>
                                <li><a href="#order/batch_query/index">新批量查询</a></li>
                                <li><a href="#order/group_list">团购列表</a></li>
                                <li><a href="#order/logistics/list">批量物流查询</a></li>
                                <li><a href="#order/order_export_finance/index">订单导出(财务)</a></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-wrench"></i>
                                <span>售后管理</span>
                                <i className="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="#after_sale/complaint_list_new">用户退款售后</a></li>
                                <li><a href="#after_sale/complaint_allot">老版投诉分配</a></li>
                                <li><a href="#after_sale/complaint_list">老版投诉列表</a></li>
                                <li><a href="#after_sale/refund_list">退款列表</a></li>
                                <li><a href="#after_sale/rights/list">维权退款</a></li>
                                <li><a href="#after_sale/after_sale_pay/index">售后打款</a></li>
                                <li><a href="#after_sale/chat_prohibit">聊天封号管理</a></li>
                                <li><a href="#after_sale/review_list/index">评价列表</a></li>
                                <li><a href="#after_sale/review_count">评价统计</a></li>
                                <li><a href="#after_sale/goods_after_sale_count">售后统计</a></li>
                                <li><a href="#after_sale/platform_intervene">平台介入率</a></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-ticket"></i>
                                <span>优惠券管理</span>
                                <i className="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="#coupon/coupon_query">优惠券查询</a></li>
                                <li><a href="#coupon/mall_coupon/list">店铺优惠劵</a></li>
                                <li><a href="#coupon/fine_coupon/task_list">罚款发券</a></li>
                                <li><a href="#coupon/goods_config/list">优惠券商品配置</a></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-cny"></i>
                                <span>店铺罚款管理</span>
                                <i className="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="#fine/scalping_management/scalping_summary">刷单管理</a></li>
                                <li><a href="#fine/false_shipment/list">虚假发货管理</a></li>
                                <li><a href="#fine/unpunish/index">免罚记录</a></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-balance-scale"></i>
                                <span>商家活动管理</span>
                                <i className="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="#competion/tweet/list">推文竞价</a></li>
                                <li><a href="#competion/tweet/special">9块9特卖竞价</a></li>
                                <li><a href="#competion/tweet/app_index">首页商品竞价</a></li>
                                <li><a href="#competion/tweet/haitao">海淘专区竞价</a></li>
                                <li><a href="#competion/tweet/love_shopping">爱逛街专题竞价</a></li>
                                <li><a href="#competion/activity_list/index">新榜活动配置</a></li>
                                <li><a href="#competion/activity_audit_list/index">新榜报名审核</a></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-line-chart"></i>
                                <span>统计管理</span>
                                <i className="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="#order/free_coupon_count">团长免单统计</a></li>
                                <li><a href="#data/orderByTime">按时间统计</a></li>
                                <li><a href="#data/orderByMall">按店铺统计</a></li>
                                <li><a href="#data/order_goods_type/index">按商品类型统计</a></li>
                                <li><a href="#data/goods_refund_statistics/index">按商品退款金额统计</a></li>
                                <li><a href="#order/haitaoGMV">海淘GMV统计</a></li>
                                <li><a href="#data/cat_gmv_count/index">分类GMV统计</a></li>
                                <li><a href="#data/label_gmv_count/index">标签GMV统计</a></li>
                                <li><a href="#data/orderByResourceGoods">资源位商品</a></li>
                                <li><a href="#data/orderByNormalGoods">非资源位商品</a></li>
                                <li><a href="#data/goods_audit_statistics/by_category">商品审核统计</a></li>
                                <li><a href="#mall/mall_service">店铺客服质量</a></li>
                                <li><a href="#mall/shop_sum_index">店铺指标统计总览</a></li>
                                <li><a href="#mall/shop_single_index">店铺个体指标</a></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-car"></i>
                                <span>发货管理</span>
                                <i className="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="#shipment/unship_batch_list">未发管理</a></li>
                                <li><a href="#shipment/false_delivery_goods">虚假发货</a></li>
                                <li><a href="#shipment/white/index">订单白名单</a></li>
                                <li><a href="#shipment/delayed_delivery/monitor_list">延迟发货统计</a></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-cog"></i>
                                <span>系统管理</span>
                                <i className="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="#order/shipping_map">物流设置</a></li>
                                <li><a href="#system/user_list">用户列表</a></li>
                                <li><a href="#system/role_list">角色列表</a></li>
                                <li><a href="#system/permission_list">权限列表</a></li>
                                <li><a href="#system/user_types_config">用户类型配置</a></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-twitter"></i>
                                <span>公众号配置</span>
                                <i className="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="#weixin/menu_config">菜单栏配置</a></li>
                                <li><a href="#weixin/group_custom">Group页面</a></li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </aside>
        );
    }
});
module.exports = LeftSide;
