<template>
  <div>
    <!-- 优惠券列表 -->
    <van-popup v-model="showList" position="bottom">
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @exchange="onExchange(coupons)"
        @click="togo()"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList:true
    };
  },
  methods: {
    // onChange(index) {
    //   this.showList = false;
    //   this.chosenCoupon = index;
    // },
    onExchange(coupon) {
      this.coupons.push(coupon);
    },
    togo(){
      this.$router.push({
        path:"/Tmine"
      })
    }
  }
};
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元"
};
</script>

<style scoped>
</style>