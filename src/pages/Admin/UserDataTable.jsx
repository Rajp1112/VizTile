import React from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function UserDataTable({ users }) {
  const columns = [
    {
      key: 'username',
      header: 'Name',
      // representative: 'username',
      // filter: true,
      // filterPlaceholder: 'Search by Last Name',
      // filterType: 'search',
      // filterable: true,
      // showFilterMatchModes: true,
      // frozen: true,
      // alignFrozen: 'left',
    },
    {
      key: 'email',
      header: 'Email',
      // representative: 'email',
      // filter: true,
      // filterPlaceholder: 'Search by Email',
      // filterType: 'search',
      // filterable: true,
      // showFilterMatchModes: true,
    },
    {
      key: 'phone',
      header: 'Phone',
      // representative: 'phone',
      // filter: true,
      // filterPlaceholder: 'Search by Phone',
      // filterType: 'search',
      // filterable: true,
      // showFilterMatchModes: true,
    },

    // /* categorical filters (roles & status) */
    // {
    //   key: 'role',
    //   header: 'Role',
    //   representative: 'role',
    //   filter: true,
    //   filterPlaceholder: 'Filter by Role',
    //   filterType: 'dropdown', // will auto-populate unique values
    //   filterable: true,
    //   showFilterMatchModes: false,
    // },
    // {
    //   key: 'status',
    //   header: 'Status',
    //   representative: 'status',
    //   filter: true,
    //   filterPlaceholder: 'Filter by Status',
    //   filterType: 'dropdown',
    //   filterable: true,
    //   showFilterMatchModes: false,
    // },

    /* dates – using multiselect keeps parity with your grid’s behaviour */
    {
      key: 'country',
      header: 'Country',
      representative: 'country',
      // filter: true,
      // filterPlaceholder: 'Filter by Date',
      // filterType: 'multiselect',
      // filterable: true,
      // showFilterMatchModes: false,
    },

    {
      key: null,
      header: 'Actions',
      // filter: false,

      // filterType: 'dropdown',
    },
  ];

  const calculateColumnWidth = (data, field, padding = 10) => {
    const maxLength = Math.max(
      ...data.map(
        (item) => String(item[field]?.name || item[field] || '').length
      )
    );

    return `${maxLength * padding}px`;
  };

  return (
    <DataTable
      value={users}
      rows={20}
      dataKey='id'
      scrollable
      scrollHeight='530px'
      emptyMessage={
        <div
          style={{
            textAlign: 'center',
            width: '100%',
          }}
        >
          No data available
        </div>
      }
      style={{
        height: '200px',
        borderCollapse: 'separate !important',
        padding: '20px',
      }}
      showGridlines
      stripedRows
      size='large'
      onFilter={(e) => setFilters(e.filters)}
    >
      {columns.map((col) => {
        if (col.key !== 'veiw_details') {
          return (
            <Column
              key={col.key}
              field={col.key}
              header={col.header}
              className='.p-column-filter-menu-button has-tooltip'
              headerStyle={{
                whiteSpace: 'nowrap',
                backgroundColor: 'oklch(0.28 0.04 260.34)',
                color: '#ffffff',
                fontSize: '1.3rem',
                fontWeight: '600',
              }}
              style={{
                minWidth: calculateColumnWidth(users, col.key),
              }}
              bodyStyle={{
                color: '#000',
                fontSize: '1.2rem',
                backgroundColor: 'oklch(0.96 0.02 272.46)',
              }}
              filter={col.filter}
              filterPlaceholder={col.filterPlaceholder}
              filterField={col.filterField || col.key}
              body={(row) => {
                return row[col.key];
              }}
              align={'center'}
              alignHeader={'center'}
            />
          );
        }
      })}
    </DataTable>
  );
}
