import React from 'react';
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { User, Bell, BellRing } from 'lucide-react';

const usersData = [
  { time: '09:00', open: 250, click: 50, second: 10 },
  { time: '12:00', open: 340, click: 100, second: 40 },
  { time: '15:00', open: 420, click: 80, second: 60 },
  { time: '18:00', open: 480, click: 160, second: 120 },
  { time: '21:00', open: 540, click: 200, second: 180 },
  { time: '00:00', open: 650, click: 300, second: 240 },
  { time: '03:00', open: 720, click: 380, second: 260 },
  { time: '06:00', open: 730, click: 390, second: 270 },
];

const emailStats = [
  { name: 'Open', value: 40, color: 'var(--color-primary)' },
  { name: 'Bounce', value: 20, color: '#ef4444' },
  { name: 'Unsubscribe', value: 40, color: 'var(--color-tertiary)' },
];

const salesData = [
  { month: 'Jan', tax: 400, total: 240 },
  { month: 'Feb', tax: 300, total: 139 },
  { month: 'Mar', tax: 200, total: 980 },
  { month: 'Apr', tax: 278, total: 390 },
  { month: 'May', tax: 189, total: 480 },
  { month: 'Jun', tax: 239, total: 380 },
  { month: 'Jul', tax: 349, total: 430 },
];

const StatCard = ({ icon: Icon, title, value, footer }) => (
  <div className='flex flex-col justify-between bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-md h-32'>
    <div className='flex items-center gap-2'>
      <Icon className='w-6 h-6 text-primary' />
      <p className='text-sm text-gray-500 dark:text-gray-400 font-medium'>
        {title}
      </p>
    </div>
    <p className='text-2xl font-semibold text-gray-900 dark:text-white'>
      {value}
    </p>
    {footer && (
      <p className='text-xs text-gray-400 dark:text-gray-500 mt-1'>{footer}</p>
    )}
  </div>
);

export default function AdminDashboard() {
  return (
    <main className='flex-1 p-4 md:p-6 overflow-y-auto space-y-6'>
      {/* KPI cards */}
      <section className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
        <StatCard
          icon={User}
          title='Storage'
          value='150GB'
          footer='Updated now'
        />
        <StatCard
          icon={Bell}
          title='Revenue'
          value='$1,345'
          footer='Last day'
        />
        <StatCard
          icon={BellRing}
          title='Errors'
          value='23'
          footer='In the last hour'
        />
        <StatCard
          icon={User}
          title='Followers'
          value='+45K'
          footer='Update now'
        />
      </section>

      {/* Charts row */}
      <section className='grid gap-6 xl:grid-cols-3'>
        {/* Line chart */}
        <div className='xl:col-span-2 bg-white dark:bg-slate-800 rounded-2xl shadow-md p-4 flex flex-col'>
          <h2 className='text-lg font-semibold text-gray-700 dark:text-gray-200'>
            Users Behaviour
          </h2>
          <p className='text-xs text-gray-400 mb-4'>24 Hours performance</p>
          <ResponsiveContainer width='100%' height={260}>
            <LineChart
              data={usersData}
              margin={{ top: 0, right: 16, left: -24, bottom: 0 }}
            >
              <XAxis
                dataKey='time'
                stroke='#cbd5e1'
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke='#cbd5e1'
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip wrapperClassName='!rounded-lg !shadow-lg' />
              <Legend
                verticalAlign='top'
                height={24}
                iconType='circle'
                wrapperStyle={{ paddingBottom: 8 }}
              />
              <Line
                type='monotone'
                dataKey='open'
                stroke='var(--color-primary)'
                strokeWidth={2}
                dot
              />
              <Line
                type='monotone'
                dataKey='click'
                stroke='#ef4444'
                strokeWidth={2}
                dot
              />
              <Line
                type='monotone'
                dataKey='second'
                stroke='var(--color-tertiary)'
                strokeWidth={2}
                dot
              />
            </LineChart>
          </ResponsiveContainer>
          <p className='text-xs text-gray-400 mt-2'>Updated 3 minutes ago</p>
        </div>

        {/* Pie chart */}
        <div className='bg-white dark:bg-slate-800 rounded-2xl shadow-md p-4 flex flex-col'>
          <h2 className='text-lg font-semibold text-gray-700 dark:text-gray-200'>
            Email Statistics
          </h2>
          <p className='text-xs text-gray-400 mb-4'>
            Last Campaign Performance
          </p>
          <ResponsiveContainer width='100%' height={260}>
            <PieChart>
              <Pie
                data={emailStats}
                dataKey='value'
                cx='50%'
                cy='50%'
                outerRadius={84}
                label
              >
                {emailStats.map((entry, i) => (
                  <Cell fill={entry.color} key={`slice-${i}`} />
                ))}
              </Pie>
              <Legend verticalAlign='bottom' height={24} iconType='circle' />
              <Tooltip wrapperClassName='!rounded-lg !shadow-lg' />
            </PieChart>
          </ResponsiveContainer>
          <p className='text-xs text-gray-400 mt-2'>Campaign sent 2 days ago</p>
        </div>
      </section>

      {/* Bar chart & Tasks row */}
      <section className='grid gap-6 xl:grid-cols-3'>
        {/* Bar Chart */}
        <div className='xl:col-span-2 bg-white dark:bg-slate-800 rounded-2xl shadow-md p-4 flex flex-col'>
          <h2 className='text-lg font-semibold text-gray-700 dark:text-gray-200'>
            2017 Sales
          </h2>
          <p className='text-xs text-gray-400 mb-4'>
            All products including Taxes
          </p>
          <ResponsiveContainer width='100%' height={260}>
            <BarChart
              data={salesData}
              margin={{ top: 0, right: 16, left: -24, bottom: 0 }}
            >
              <XAxis
                dataKey='month'
                stroke='#cbd5e1'
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke='#cbd5e1'
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip wrapperClassName='!rounded-lg !shadow-lg' />
              <Legend iconType='circle' />
              <Bar
                dataKey='total'
                fill='var(--color-primary)'
                radius={[4, 4, 0, 0]}
              />
              <Bar dataKey='tax' fill='#ef4444' radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <p className='text-xs text-gray-400 mt-2'>Updated 1 day ago</p>
        </div>

        {/* Tasks */}
        <div className='bg-white dark:bg-slate-800 rounded-2xl shadow-md p-4 flex flex-col'>
          <h2 className='text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3'>
            Tasks
          </h2>
          <ul className='space-y-3 flex-1 overflow-auto text-sm text-gray-500 dark:text-gray-400'>
            <li className='flex items-center gap-2'>
              <input id='task-1' type='checkbox' className='shrink-0' />
              <label htmlFor='task-1' className='cursor-pointer'>
                Make a calendar for May 2021
              </label>
            </li>
            <li className='flex items-center gap-2'>
              <input
                id='task-2'
                type='checkbox'
                className='shrink-0'
                defaultChecked
              />
              <label htmlFor='task-2' className='cursor-pointer'>
                Send invitations for the event
              </label>
            </li>
            <li className='flex items-center gap-2'>
              <input id='task-3' type='checkbox' className='shrink-0' />
              <label htmlFor='task-3' className='cursor-pointer'>
                Create a logo for the project
              </label>
            </li>
            <li className='flex items-center gap-2'>
              <input id='task-4' type='checkbox' className='shrink-0' />
              <label htmlFor='task-4' className='cursor-pointer'>
                Develop UI components
              </label>
            </li>
          </ul>
          <button className='text-primary hover:underline self-start mt-3 text-sm font-semibold'>
            + Create new task
          </button>
        </div>
      </section>
    </main>
  );
}
