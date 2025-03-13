import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import * as React from 'react';
import { Outlet } from 'react-router';
import OrdersDataGrid from '../components/OrdersDataGrid';


export default function Layout() {


  return (
    <DashboardLayout>
      <PageContainer>
        <Outlet />
        <OrdersDataGrid />
      </PageContainer>
    </DashboardLayout>
  );
}