//母版页
const MasterPage  = () => import('@/components/MasterPage')
const Home = () => import('@/components/Home')
const Error = () => import('@/components/Error')

//产品组件
const ProductType = () => import('@/components/product/ProductType')
const ProductList = () => import('@/components/product/ProductList')
const ProductStopList = () => import('@/components/product/ProductStopList')

//商户组件
const BrandList = () => import('@/components/trader/BrandList')
const TraderList = () => import('@/components/trader/TraderList')
const BunkList = () => import('@/components/trader/BunkList')
const BunkEdit = () => import('@/components/trader/BunkEdit')
const TraderMap = () => import('@/components/trader/TraderMap')
const Bunklevel = () => import('@/components/trader/Bunklevel')

//系统管理组件
const RolesList = () => import('@/components/system/RolesList')
const UserList = () => import('@/components/system/UserList')
const MenuList = () => import('@/components/system/MenuList')
const DepartList = () => import('@/components/system/DepartList')

//采购管理
const PurchaseSupplier = () => import('@/components/purchase/PurchaseSupplier')
const PurchaseList = () => import('@/components/purchase/PurchaseList')
const PurchaseDetailList = () => import( '@/components/purchase/PurchaseDetailList')

//库存管理
const StockList = () => import('@/components/stock/StockList')
const StockDetailList = () => import('@/components/stock/StockDetailList')
const StockInList = () => import('@/components/stock/StockInList')
const StockInDetailList = () => import('@/components/stock/StockInDetailList')
const StockOutList = () => import('@/components/stock/StockOutList')
const StockOutDetailList = () => import('@/components/stock/StockOutDetailList')
const StockBadList = () => import('@/components/stock/StockBadList')
const StockCheckList = () => import('@/components/stock/StockCheckList')
const StockAssembleList = () => import('@/components/stock/StockAssembleList')
const StockDisassemblyList = () => import('@/components/stock/StockDisassemblyList')

//销售管理
const SellList = () => import('@/components/sell/SellList')
const SellDetailList = () => import('@/components/sell/SellDetailList')
const SellReturnList = () => import('@/components/sell/SellReturnList')
const SellReturnDetailList = () => import('@/components/sell/SellReturnDetailList')

//报表分析
const PurchaseStatistics = () => import('@/components/report/PurchaseStatistics')
const BunkStatistics = () => import('@/components/report/BunkStatistics')
const SellAreaStatistics = () => import('@/components/report/SellAreaStatistics')
const SellMonthStatistics = () => import('@/components/report/SellMonthStatistics')

//基础设置
const SystemSetting = () => import('@/components/base/SystemSetting')
const MeterUnitList = () => import('@/components/base/MeterUnitList')
const StorageList = () => import('@/components/base/StorageList')
const StorageLoList = () => import('@/components/base/StorageLoList')

//财务管理
const BillList = () => import('@/components/payment/BillList')
const BillRecordList = () => import('@/components/payment/BillRecordList')
const PayList = () => import('@/components/payment/PayList')




//数据库读取component动态加载路由，始终不成功，所以用的下面方法
//component:(resolve) => require([`@/components/system/${curTowList[ch].COMPONENT}.vue`], resolve),

//组件建值对
let vueList= {
  "/MasterPage": MasterPage,
  "/Home": Home,
  "/Error": Error,

  //基础设置
  "/base/SystemSetting": SystemSetting,
  "/base/MeterUnitList": MeterUnitList,
  "/base/StorageList": StorageList,
  "/base/StorageLoList": StorageLoList,

  //系统设置
  "/system/UserList": UserList,
  "/system/RolesList": RolesList,
  "/system/MenuList": MenuList,
  "/system/DepartList":DepartList,


  //产品管理
  "/product/ProductType": ProductType,
  "/product/ProductList": ProductList,
  "/product/ProductStopList": ProductStopList,

  //商户管理
  "/trader/TraderList": TraderList,
  "/trader/Bunklevel": Bunklevel,
  "/trader/TraderMap": TraderMap,
  "/trader/BrandList": BrandList,
  "/trader/BunkList": BunkList,
  "/trader/BunkEdit": BunkEdit,

  //采购管理
  "/purchase/PurchaseSupplier": PurchaseSupplier,
  "/purchase/PurchaseList": PurchaseList,
  "/purchase/PurchaseDetailList": PurchaseDetailList,


  //库存管理
  "/stock/StockList": StockList,
  "/stock/StockDetailList": StockDetailList,
  "/stock/StockInList": StockInList,
  "/stock/StockInDetailList": StockInDetailList,
  "/stock/StockOutList": StockOutList,
  "/stock/StockOutDetailList": StockOutDetailList,
  "/stock/StockBadList": StockBadList,
  "/stock/StockCheckList": StockCheckList,
  "/stock/StockAssembleList": StockAssembleList,
  "/stock/StockDisassemblyList": StockDisassemblyList,


  //销售管理
  "/sell/SellList": SellList,
  "/sell/SellDetailList":SellDetailList,
  "/sell/SellReturnList": SellReturnList,
  "/sell/SellReturnDetailList": SellReturnDetailList,

  //报表分析
  "/report/PurchaseStatistics": PurchaseStatistics,
  "/report/BunkStatistics": BunkStatistics,
  "/report/SellAreaStatistics": SellAreaStatistics,
  "/report/SellMonthStatistics": SellMonthStatistics,

  //财务管理
  "/payment/BillList": BillList,
  "/payment/BillRecordList": BillRecordList,
  "/payment/PayList": PayList,

};
export default vueList;
