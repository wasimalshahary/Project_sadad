/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Home, 
  Grid, 
  User, 
  BarChart3, 
  MoreHorizontal, 
  Bell, 
  Menu, 
  ArrowLeft,
  Search,
  Wallet,
  Gamepad2,
  Users,
  CreditCard,
  Headphones,
  BookOpen,
  Plus,
  Wifi,
  Smartphone,
  History,
  ShieldCheck,
  Package,
  Settings,
  ArrowRightLeft,
  FileText,
  Percent,
  LogOut,
  Trophy,
  Megaphone,
  Eye,
  EyeOff
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type Tab = 'home' | 'services' | 'account' | 'reports' | 'more';

// --- Components ---

const BottomNav = ({ activeTab, setActiveTab }: { activeTab: Tab, setActiveTab: (tab: Tab) => void }) => {
  const tabs = [
    { id: 'more', label: 'المزيد', icon: MoreHorizontal },
    { id: 'reports', label: 'التقارير', icon: BarChart3 },
    { id: 'account', label: 'حسابي', icon: User },
    { id: 'services', label: 'الخدمات', icon: Grid },
    { id: 'home', label: 'الرئيسية', icon: Home },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 px-2 py-3 z-50">
      <div className="flex justify-between items-center px-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as Tab)}
            className={`nav-item flex flex-col items-center gap-1 transition-colors duration-200 ${activeTab === tab.id ? 'text-blue-600' : 'text-gray-500'}`}
            id={`nav-tab-${tab.id}`}
          >
            <tab.icon size={22} />
            <span className="text-[10px] font-medium">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const Header = ({ title, showBack = false, showMenu = true, onMenuClick }: { title?: string, showBack?: boolean, showMenu?: boolean, onMenuClick?: () => void }) => {
  return (
    <div className="bg-blue-600 text-white p-4 pt-4 sticky top-0 z-40 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {showMenu && (
            <button onClick={onMenuClick} className="p-1 hover:bg-white/10 rounded-lg">
              <Menu size={24} />
            </button>
          )}
          {showBack && (
            <button className="p-1 hover:bg-white/10 rounded-lg">
              <ArrowLeft size={24} />
            </button>
          )}
          {title && <h1 className="text-lg font-bold">{title}</h1>}
        </div>
        {!title && (
          <div className="flex items-center gap-4">
             <div className="relative">
                <Bell size={24} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full border-2 border-primary">0</span>
             </div>
             <button className="p-1 hover:bg-white/10 rounded-lg">
               <ArrowLeft size={24} className="transform rotate-180" />
             </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Sidebar = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const menuItems = [
    { icon: Settings, label: 'الإعدادات' },
    { icon: History, label: 'العمليات' },
    { icon: BarChart3, label: 'التقارير' },
    { icon: ShieldCheck, label: 'التأمينات' },
    { icon: FileText, label: 'اليوميات' },
    { icon: Trophy, label: 'المسابقات' },
    { icon: Megaphone, label: 'عروض وإعلانات' },
    { icon: Smartphone, label: 'الشرائح' },
    { icon: Wifi, label: 'معرض شبكاتي' },
  ];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/50 z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-white z-[70] flex flex-col"
            >
              <div className="p-6 bg-blue-600 text-white text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <User size={40} />
                </div>
                <h3 className="font-bold text-lg">وسيم يحيى الشهاري</h3>
                <p className="text-sm opacity-80">رقم الحساب: 3736</p>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {menuItems.map((item, idx) => (
                  <button key={idx} className="w-full flex items-center gap-4 p-3 hover:bg-gray-100 rounded-xl transition-colors">
                    <item.icon size={22} className="text-gray-600" />
                    <span className="font-medium text-gray-700">{item.label}</span>
                  </button>
                ))}
              </div>
              <div className="p-4 border-t border-gray-100">
                <button className="w-full flex items-center gap-4 p-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors">
                  <LogOut size={22} />
                  <span className="font-bold">تسجيل خروج</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

// --- Page Components ---

const HomePage = () => {
  const [showBalance, setShowBalance] = useState(false);

  const mainActions = [
    { icon: Wifi, label: 'كبينة WIFI', color: 'bg-cyan-50' },
    { icon: Gamepad2, label: 'معرض الألعاب', color: 'bg-green-50' },
    { icon: Users, label: 'إدارة العملاء', color: 'bg-orange-50' },
    { icon: CreditCard, label: 'كبينة السداد', color: 'bg-blue-50' },
    { icon: Headphones, label: 'الدعم الفني', color: 'bg-indigo-50' },
    { icon: BookOpen, label: 'الدفتر المحاسبي', color: 'bg-purple-50' },
    { icon: Wallet, label: 'غذي حسابك', color: 'bg-yellow-50' },
    { icon: Package, label: 'البرامج', color: 'bg-red-50' },
  ];

  return (
    <div className="pb-24">
      {/* Balance Section */}
      <div className="bg-blue-600 text-white p-6 pb-20 rounded-b-[40px] relative">
        <h2 className="text-xl opacity-90 mb-2">الرصيد المتاح</h2>
        <div className="flex items-center gap-3">
          <button onClick={() => setShowBalance(!showBalance)}>
            {showBalance ? <Eye size={24} /> : <EyeOff size={24} />}
          </button>
          <span className="text-3xl font-bold tracking-wider">
            {showBalance ? '1,250.00 ر.ي' : '*****'}
          </span>
          <Wallet size={24} className="opacity-80" />
        </div>

        {/* Circular Decors */}
        <div className="absolute top-10 right-10 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16"></div>
      </div>

      {/* Quick Select Buttons */}
      <div className="px-4 -mt-12">
        <div className="bg-white rounded-2xl shadow-lg p-4 flex justify-between gap-2">
          {[1, 2, 3, 4].map(idx => (
            <div key={idx} className="flex flex-col items-center gap-1 flex-1">
              <div className="w-12 h-12 rounded-full border-2 border-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors">
                <Plus size={24} />
              </div>
              <span className="text-[10px] text-gray-500 font-bold">إختر</span>
            </div>
          ))}
          <div className="flex flex-col items-center gap-1 flex-1">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
               <Wifi size={24} />
            </div>
            <span className="text-[10px] text-gray-500 font-bold">معرض شبكاتي</span>
          </div>
        </div>
      </div>

      {/* Main Services Grid */}
      <div className="p-4 mt-4">
        <div className="flex items-center justify-between mb-4">
           <h3 className="text-lg font-bold">الخدمات الاساسية</h3>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {mainActions.map((action, idx) => (
            <motion.div 
               whileTap={{ scale: 0.95 }}
               key={idx} 
               className="flex flex-col items-center gap-2 group"
               id={`main-service-${idx}`}
            >
              <div className={`w-14 h-14 ${action.color} rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-black/5 group-hover:scale-110 transition-transform`}>
                <action.icon size={28} />
              </div>
              <span className="text-[11px] font-bold text-center leading-tight">{action.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Promo Banner */}
      <div className="p-4">
        <div className="bg-gradient-to-l from-cyan-400 to-blue-500 rounded-2xl p-6 text-white relative overflow-hidden h-32 flex flex-col justify-center">
            <div className="z-10">
                <h4 className="text-lg font-bold">شبكة التسهيل - وجهتك الأولى</h4>
                <p className="text-xs opacity-90">لشحن برامج الالعاب الالكترونية</p>
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-white/20 -skew-x-12 translate-x-12"></div>
            <div className="absolute right-4 bottom-4">
               <Gamepad2 size={40} className="text-white/30" />
            </div>
        </div>
      </div>
    </div>
  );
};

const ServicesPage = () => {
    const services = [
        { label: 'تغذية الحساب', icon: Wallet, color: 'border-blue-500' },
        { label: 'كبينة الشرايح والتفعيل', icon: Smartphone, color: 'border-cyan-500' },
        { label: 'كبينة التسديدات', icon: CreditCard, color: 'border-indigo-500' },
        { label: 'الدعم الفني والتقني', icon: Headphones, color: 'border-orange-500' },
        { label: 'غذي حسابك بنفسك مباشر', icon: ArrowRightLeft, color: 'border-purple-500' },
        { label: 'بطائق الانترنت والكروت', icon: Wifi, color: 'border-teal-500' },
        { label: 'شحن الألعاب', icon: Gamepad2, color: 'border-red-500' },
        { label: 'إرسال إشعار التأمين', icon: ShieldCheck, color: 'border-green-500' },
        { label: 'توثيق الحساب', icon: FileText, color: 'border-blue-600' },
    ];

    return (
        <div className="pb-24">
            <Header title="الخدمات" showMenu={false} showBack={true} />
            <div className="p-4">
                <div className="relative mb-6">
                    <input 
                        type="text" 
                        placeholder="ابحث عن الخدمة..." 
                        className="w-full bg-white border border-gray-200 rounded-xl py-3 px-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm"
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <button className="absolute left-3 top-1/2 -translate-y-1/2 bg-blue-100 p-1.5 rounded-lg text-blue-600">
                        <History size={18} />
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    {services.map((service, idx) => (
                        <motion.div 
                            whileTap={{ scale: 0.95 }}
                            key={idx} 
                            className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 flex flex-col items-center"
                            id={`service-card-${idx}`}
                        >
                            <div className="p-4 flex-1 flex flex-col items-center justify-center gap-3">
                                <div className={`p-3 rounded-full bg-gray-50 flex items-center justify-center text-blue-600 border-b-4 ${service.color}`}>
                                    <service.icon size={26} />
                                </div>
                                <span className="text-[11px] font-bold text-center leading-tight px-1">{service.label}</span>
                            </div>
                            <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500/0"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const AccountPage = () => {
    return (
        <div className="pb-24 bg-gray-50">
            <div className="bg-blue-600 text-white text-center py-10 px-6 rounded-b-[40px] shadow-lg relative">
                <div className="absolute top-4 right-4">
                    <History size={24} className="opacity-80" />
                </div>
                <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 border-4 border-white/10 flex items-center justify-center relative">
                    <User size={50} />
                    <button className="absolute -bottom-1 -right-1 bg-white text-blue-600 p-1.5 rounded-full shadow-md">
                        <Settings size={14} />
                    </button>
                </div>
                <h2 className="text-xl font-bold">وسيم يحيى الشهاري - تجاري</h2>
                <div className="flex flex-col gap-1 mt-2 text-sm opacity-80 font-medium">
                    <p>رقم حسابي: 3736</p>
                    <p>776559159</p>
                    <p>اليمن</p>
                </div>
            </div>

            <div className="p-4 space-y-4 -mt-6">
                <div className="bg-white rounded-2xl shadow-sm p-4 space-y-3">
                    <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="flex items-center gap-3">
                            <Settings size={20} className="text-gray-400" />
                            <span className="font-bold text-gray-700">تحديث كلمة السر</span>
                        </div>
                        <ArrowLeft size={18} className="text-gray-300" />
                    </button>
                    <div className="h-px bg-gray-100 mx-2"></div>
                    <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="flex items-center gap-3">
                            <Settings size={20} className="text-gray-400" />
                            <span className="font-bold text-gray-700">تحديث اسم الدخول</span>
                        </div>
                        <ArrowLeft size={18} className="text-gray-300" />
                    </button>
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-4">
                    <div className="flex items-center justify-between mb-4">
                       <h3 className="font-bold text-lg flex items-center gap-2">
                           <Menu size={20} className="text-blue-600" />
                           الصلاحيات
                       </h3>
                    </div>
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-100">
                            <tr className="text-center">
                                <th className="p-3">الصلاحية</th>
                                <th className="p-3">الحالة</th>
                                <th className="p-3">توضيح</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {[
                                { label: 'صلاحية الوكيل', status: 'off', icon: User },
                                { label: 'صلاحية واتساب', status: 'off', icon: Headphones },
                                { label: 'صلاحية الموزع', status: 'off', icon: Users },
                            ].map((row, idx) => (
                                <tr key={idx} className="text-center">
                                    <td className="p-3 flex items-center gap-2 justify-center font-medium">
                                        <row.icon size={16} className="text-gray-400" />
                                        {row.label}
                                    </td>
                                    <td className="p-3">
                                        <div className="w-6 h-6 border-2 border-gray-300 rounded-full mx-auto flex items-center justify-center">
                                            <div className="w-3 h-0.5 bg-gray-300 transform rotate-45"></div>
                                        </div>
                                    </td>
                                    <td className="p-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 mx-auto flex items-center justify-center font-bold">i</div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-4">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-lg">نسب التسديدات</h3>
                        <Menu size={20} className="text-blue-300" />
                    </div>
                    <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                         <div className="flex flex-col items-center gap-2 min-w-[100px] border border-gray-100 rounded-xl p-3 bg-red-50/50">
                             <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs">يمن موبايل</div>
                             <span className="text-[10px] font-bold">يمن موبايل</span>
                         </div>
                         <div className="flex flex-col items-center gap-2 min-w-[100px] border border-gray-100 rounded-xl p-3 bg-yellow-50/50">
                             <div className="w-12 h-12 rounded-full bg-yellow-400 text-white flex items-center justify-center font-bold text-xs uppercase">You</div>
                             <span className="text-[10px] font-bold">YOU</span>
                         </div>
                         <div className="flex flex-col items-center gap-2 min-w-[100px] border border-gray-100 rounded-xl p-3 bg-blue-50/50">
                             <div className="w-12 h-12 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold text-xs">سبأفون</div>
                             <span className="text-[10px] font-bold">سبأفون</span>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ReportsPage = () => {
    const stats = [
        { label: 'كشف حساب', icon: FileText },
        { label: 'سجل', icon: History },
        { label: 'الأرصدة', icon: BarChart3 },
        { label: 'التسديدات', icon: CreditCard },
        { label: 'تسديدات الفروع', icon: Grid },
        { label: 'الحوالات المالية', icon: ArrowRightLeft },
        { label: 'كروت الواي فاي', icon: Wifi },
        { label: 'اخرى', icon: Grid },
    ];

    return (
        <div className="pb-24">
            <div className="bg-blue-600 text-white p-6 rounded-b-[40px] shadow-lg sticky top-0 z-40">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-xl font-bold">تقارير</h1>
                    <History size={24} className="opacity-80" />
                </div>
                <div className="flex justify-around items-center">
                    <div className="text-center">
                        <div className="relative w-24 h-24 flex items-center justify-center mb-2">
                             <svg className="w-full h-full transform -rotate-90">
                                <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/10" />
                                <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="251.2" strokeDashoffset="251.2" className="text-white" />
                             </svg>
                             <span className="absolute text-sm font-bold">0.0%</span>
                        </div>
                        <span className="text-sm font-medium opacity-90">رصيدي</span>
                    </div>
                    <div className="text-center">
                        <div className="relative w-24 h-24 flex items-center justify-center mb-2">
                             <svg className="w-full h-full transform -rotate-90">
                                <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/10" />
                                <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="251.2" strokeDashoffset="251.2" className="text-white" />
                             </svg>
                             <span className="absolute text-sm font-bold">0.0%</span>
                        </div>
                        <span className="text-sm font-medium opacity-90">حصالة ارباحي</span>
                    </div>
                </div>
            </div>

            <div className="p-4">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 grid grid-cols-3 gap-y-8 gap-x-4 mb-4">
                    {stats.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2 group cursor-pointer">
                            <item.icon size={28} className="text-blue-600 group-hover:scale-110 transition-transform" />
                            <span className="text-[11px] font-bold text-center text-gray-700 whitespace-nowrap">{item.label}</span>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                    <div className="flex border-b border-gray-100 mb-4">
                        <button className="flex-1 pb-3 text-center text-blue-600 font-bold border-b-2 border-blue-600">كمية</button>
                        <button className="flex-1 pb-3 text-center text-gray-400 font-bold">مبلغ</button>
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50">
                            <div className="flex items-center gap-3">
                                <ArrowLeft size={16} className="text-blue-500" />
                                <span className="font-bold text-gray-700">التسديدات</span>
                            </div>
                            <span className="text-lg font-mono font-bold text-blue-600">0</span>
                        </div>
                        <div className="h-px bg-gray-50"></div>
                        <div className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50">
                            <div className="flex items-center gap-3">
                                <ArrowLeft size={16} className="text-blue-500" />
                                <span className="font-bold text-gray-700">الشرائح</span>
                            </div>
                            <span className="text-lg font-mono font-bold text-blue-600">0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const MorePage = () => {
    return (
        <div className="pb-24">
            <Header title="المزيد" showMenu={false} />
            <div className="p-4 space-y-4">
                <div className="space-y-3">
                    <h3 className="font-bold text-blue-900 px-2">خدمات مميزة</h3>
                    <div className="bg-white rounded-2xl border-2 border-dashed border-gray-200 p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors group">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 text-blue-600 group-hover:scale-110 transition-transform">
                            <Wallet size={24} />
                        </div>
                        <p className="font-black text-gray-700">غذي حسابك بنفسك</p>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm divide-y divide-gray-100 overflow-hidden">
                    <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600">
                                <CreditCard size={20} />
                            </div>
                            <span className="font-bold text-gray-700">قسم الكروت والشرائح</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                            <Plus size={16} />
                        </div>
                    </button>
                    <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600">
                                <Wifi size={20} />
                            </div>
                            <span className="font-bold text-gray-700">الواي فاي</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                            <Plus size={16} />
                        </div>
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center space-y-3">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto text-blue-600 border border-blue-100">
                            <BookOpen size={32} />
                        </div>
                        <h4 className="font-bold text-blue-600">التعليمات</h4>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center space-y-3">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto text-blue-600 border border-blue-100">
                            <ShieldCheck size={32} />
                        </div>
                        <h4 className="font-bold text-blue-600">الشروط</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomePage />;
      case 'services': return <ServicesPage />;
      case 'account': return <AccountPage />;
      case 'reports': return <ReportsPage />;
      case 'more': return <MorePage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen max-w-md mx-auto bg-gray-50 relative overflow-x-hidden font-sans pb-20">
      {/* Dynamic Header */}
      {activeTab === 'home' && (
        <div className="sticky top-0 left-0 right-0 max-w-md mx-auto z-50 p-4 bg-blue-600 text-white flex items-center justify-between">
           <div className="flex items-center gap-3">
              <button 
                onClick={() => setSidebarOpen(true)}
                className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                id="menu-button"
              >
                <Menu size={20} />
              </button>
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center overflow-hidden border-2 border-white/20">
                 <User className="text-blue-600" size={24} />
              </div>
           </div>
           
           <div className="flex items-center gap-2">
              <div className="relative">
                <Bell size={24} className="text-white/90" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-blue-600">0</span>
              </div>
              <button className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                 <ArrowLeft size={20} className="transform rotate-180" />
              </button>
           </div>
        </div>
      )}
      
      {/* Page Content */}
      <AnimatePresence mode="wait">
        <motion.div
           key={activeTab}
           initial={{ opacity: 0, scale: 0.98 }}
           animate={{ opacity: 1, scale: 1 }}
           exit={{ opacity: 0, scale: 1.02 }}
           transition={{ duration: 0.2 }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
