import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import './ChangingOrRefundingIntroductionsComponent.scss'




class ChangingOrRefundingIntroductionsComponent extends React.Component {
    toLastHandler(){
         history.go(-1);
    }
    render() {
        return (
            <div className="changingOrRefundingIntroductions">
                <div className="changingOrRefundingIntroductions-top">
                    <Link onClick={this.toLastHandler.bind(this)} className="toLastPage">
                        <i className="iconfont icon-fanhui"></i>
                    </Link>
                    <h4>退换货说明</h4>
                </div>
                <div className="changingOrRefundingIntroductions-body">
                    <h3>退换货政策 （客服电话, 400-000-7788）</h3>
                    <ul>
                        <li>1.自客户签收商品算起的 48 小时内，商品在未经拆封和食用的情况下，如您对我们的商品不满意，我们将提供退换货的服务。
                        </li>
                        <li>2.如果您收的商品有质量问题，您可以通过退换货通道/App退换货通道/电话联系客服处理。
                        </li>
                        <li>3.如果您通过退换货通道做申请，请您上传退换货商品的整体照，并保留商品。（以便于客服人员及时处理您的问题）。
                        </li>
                    </ul>
                    <h3>特别声明</h3>
                    <ul>
                        <li>1.退货发生时，由于客户原因造成的退货，我们只能退回商品的货款金额，原订单如有相应运费恕不退还，如果是上面安排退货，还需加收送货费： 如因易果原因或商品质量问题造成的退货，易果将退还您商品的货款金额及相应运费。
                        </li>
                        <li>2.新鲜蔬菜和部分特殊商品（商品说明中会提示）我们只受理当场投诉，一旦签收，我们将不再接受退回要求。
                        </li>
                        <li>3.如因客户个人原因造成质量问题的商品，恕不退换。
                        </li>
                        <li>4.订单中如有特惠品，退货时，如不满足特惠品赠送条件，需将特惠品一同退回，如特惠品一经拆封或食用，则订单商品只换不退，如有不便，敬 请谅解。
                        </li>
                        <li>5.退货需要退回发票及易果配送单（客户联），请于购买商品后妥善保管购物发票及配送单，如因客户原因无法退回发票或易果配送单（客户联） 的，将可能导致无法进行退货，因此而产生的不利后果，将会由您承担。
                        </li>
                        <li>6.对于货物数量缺失的情况，我们只受理当场投诉，即货物配送到家后，客户当面清点货物数量并及时向配送员提出的投诉。一旦签收，我们将不受 理此退换要求。
                        </li>
                        <li>7.通常情况下，一张订单只能进行一次退换货操作，所以为了确保您的权益，请您考虑周全后与我们联系。
                        </li>
                        <li>8.发生退货后款项我们会为您存入您在易果的账户中，以便于下次订购使用，如您需办理退回，请联系我们的客服，经客服工作人员核实后会为您办 理退款。预存款支付的只能退回预存款账户中，礼品卡（抵用券）支付的金额无法换成现金，不能办理退款。
                        </li>
                        <li>9.图片及信息仅供参照，商品将以实物为准，因拍摄灯光及不同显示器色差等问题可能造成商品图片与实物有一定色差，不属质量问题。
                        </li>
                    </ul>
                    <h3>温馨提示</h3>
                    <ul>
                        <li>为了您的利益，请收到货物后仔细清点检查您订购的商品。如商品配送有误、包装破损、产品腐烂、数量不对等问题，请当面及时向配送人员提出，以便我们能尽快的为您处理。
                        </li>
                    </ul>
                </div>
            </div>
            
        )
    }
}

export default ChangingOrRefundingIntroductionsComponent