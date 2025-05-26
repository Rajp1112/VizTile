import React, { useEffect, useState } from 'react';

import { FilterMatchMode, FilterOperator, FilterService } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';

import { TriStateCheckbox } from 'primereact/tristatecheckbox';

import { Eye, MergeIcon, Pencil, Scissors } from 'lucide-react';

import { Calendar } from 'primereact/calendar';

import { Tooltip } from 'primereact/tooltip';

// Custom range filter registration
const applyFilter = (val, filterCallback) => {
  if (filterCallback && typeof filterCallback === 'function') {
    filterCallback(val);
  }
};

export default function CustomDataTable() {
  /* --------------------------------------------------
   * columns → meta for User Profile Details table
   * -------------------------------------------------*/
  const columns = [
    /* checkbox for multi-select -- keep exactly as your grid needs */
    {
      field: 'checkbox',
      header: '',
      representative: 'checkbox',
      filter: false,
      frozen: true,
      alignFrozen: 'left',
      filterType: 'search',
      filterable: false,
      showFilterMatchModes: true,
      split: false,
    },

    /* basic user info */
    {
      field: 'first_name',
      header: 'First Name',
      representative: 'first_name',
      filter: true,
      filterPlaceholder: 'Search by First Name',
      filterType: 'search',
      filterable: true,
      showFilterMatchModes: true,
      frozen: true,
      alignFrozen: 'left',
    },
    {
      field: 'last_name',
      header: 'Last Name',
      representative: 'last_name',
      filter: true,
      filterPlaceholder: 'Search by Last Name',
      filterType: 'search',
      filterable: true,
      showFilterMatchModes: true,
      frozen: true,
      alignFrozen: 'left',
    },
    {
      field: 'email',
      header: 'Email',
      representative: 'email',
      filter: true,
      filterPlaceholder: 'Search by Email',
      filterType: 'search',
      filterable: true,
      showFilterMatchModes: true,
    },
    {
      field: 'phone',
      header: 'Phone',
      representative: 'phone',
      filter: true,
      filterPlaceholder: 'Search by Phone',
      filterType: 'search',
      filterable: true,
      showFilterMatchModes: true,
    },

    /* categorical filters (roles & status) */
    {
      field: 'role',
      header: 'Role',
      representative: 'role',
      filter: true,
      filterPlaceholder: 'Filter by Role',
      filterType: 'dropdown', // will auto-populate unique values
      filterable: true,
      showFilterMatchModes: false,
    },
    {
      field: 'status',
      header: 'Status',
      representative: 'status',
      filter: true,
      filterPlaceholder: 'Filter by Status',
      filterType: 'dropdown',
      filterable: true,
      showFilterMatchModes: false,
    },

    /* dates – using multiselect keeps parity with your grid’s behaviour */
    {
      field: 'created_at',
      header: 'Created',
      representative: 'created_at',
      filter: true,
      filterPlaceholder: 'Filter by Date',
      filterType: 'multiselect',
      filterable: true,
      showFilterMatchModes: false,
    },

    /* action buttons & view icon – frozen right like your existing spec */
    {
      field: null,
      header: 'Actions',
      filter: false,

      filterType: 'dropdown',
    },
    {
      field: 'view',
      header: '',
      filter: false,

      filterType: 'dropdown',
    },
  ];

  /* --------------------------------------------------
   * value → dummy user records
   * -------------------------------------------------*/
  const value = [
    {
      id: 'c1f1e7c8-4fa4-4d3c-8b4d-71af1d10e1a1',
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com',
      phone: '555-123-4567',
      role: 'Administrator',
      status: 'Active',
      created_at: '2025-01-15',
    },
    {
      id: '6a7a3c77-1b0f-43c2-bd1d-9ad43b24f2f2',
      first_name: 'Jane',
      last_name: 'Smith',
      email: 'jane.smith@example.com',
      phone: '555-987-6543',
      role: 'Editor',
      status: 'Pending',
      created_at: '2025-03-02',
    },
    {
      id: '2fd72c09-e5ea-4a76-9a02-8b18a2e2b3b3',
      first_name: 'Robert',
      last_name: 'Williams',
      email: 'robert.williams@example.com',
      phone: '555-222-3333',
      role: 'Viewer',
      status: 'Inactive',
      created_at: '2024-11-22',
    },
    {
      id: 'e65cb9b4-1d2e-4af9-b9e5-4a1d6a6e4c4c',
      first_name: 'Emily',
      last_name: 'Johnson',
      email: 'emily.johnson@example.com',
      phone: '555-444-5555',
      role: 'Editor',
      status: 'Active',
      created_at: '2025-02-10',
    },
    {
      id: '9d352b6f-8f1d-47e8-a1f3-12f6a8e3d5d5',
      first_name: 'Michael',
      last_name: 'Brown',
      email: 'michael.brown@example.com',
      phone: '555-666-7777',
      role: 'Viewer',
      status: 'Active',
      created_at: '2024-12-30',
    },
    {
      id: '7b129f76-6ab3-4c70-9d98-6de9b9f8e6e6',
      first_name: 'Laura',
      last_name: 'Garcia',
      email: 'laura.garcia@example.com',
      phone: '555-888-9999',
      role: 'Administrator',
      status: 'Active',
      created_at: '2025-04-09',
    },
    {
      id: 'd23f4e63-14be-4db6-93a4-7c0e8a5b7f7f',
      first_name: 'Daniel',
      last_name: 'Martinez',
      email: 'daniel.martinez@example.com',
      phone: '555-101-1122',
      role: 'Viewer',
      status: 'Pending',
      created_at: '2025-05-01',
    },
    {
      id: 'ab3e8c11-8d29-4b68-865e-9b7d7c9a1a1a',
      first_name: 'Sophia',
      last_name: 'Lee',
      email: 'sophia.lee@example.com',
      phone: '555-131-4151',
      role: 'Editor',
      status: 'Inactive',
      created_at: '2024-10-05',
    },
  ];

  const [filters, setFilters] = useState({});
  const [globalFilterValue, setGlobalFilterValue] = useState('');
  const [rowClick, setRowClick] = useState(false);
  const [selectedItems, setSelectedItems] = useState(
    () =>
      value?.filter((item) => item.confirm_for_tomorrows_dispatch === true) ||
      []
  );

  const [customers, setCustomers] = useState([]);
  const onStatusChange = (e, rowData) => {
    rowData.copacker_destination = e?.value || null;

    setCustomers([...customers]);
  };

  useEffect(() => {
    const initialFilters = columns.reduce((acc, col) => {
      if (col.filterable) {
        if (col.filterType === 'multiselect') {
          acc[col.field] = {
            value: null,
            matchMode: FilterMatchMode.IN,
          };
        } else if (col.filterType === 'search') {
          acc[col.field] = {
            operator: FilterOperator.AND,
            constraints: [
              { value: null, matchMode: FilterMatchMode.STARTS_WITH },
            ],
          };
        } else if (col.filterType === 'date') {
          acc[col.field] = {
            operator: FilterOperator.AND,
            constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
          };
        }
      }
      return acc;
    }, {});
    setFilters(initialFilters);
  }, []);

  const onGlobalFilterChange = (e) => {
    const newVal = e.target.value;
    const updatedFilters = {
      ...filters,
      global: { value: newVal, matchMode: FilterMatchMode.CONTAINS },
    };
    setFilters(updatedFilters);
    setGlobalFilterValue(newVal);
  };

  const getFilterElement = (options, col) => {
    switch (col.filterType) {
      case 'multiselect':
        return (
          <MultiSelect
            value={options.value}
            options={col.filterOptions || []}
            onChange={(e) =>
              options.filterApplyCallback(e.target.value, options.index)
            }
            optionLabel={col.optionLabel || 'label'}
            placeholder='Any'
            className='p-column-filter'
            maxSelectedLabels={1}
            filter
          />
        );

      case 'dropdown':
        return (
          <Dropdown
            value={options.value}
            options={col.filterOptions || []}
            onChange={(e) =>
              options.filterApplyCallback(e.target.value, options.index)
            }
            itemTemplate={col.itemTemplate}
            placeholder='Select One'
            className='p-column-filter'
            showClear
            style={{ minWidth: '12rem' }}
          />
        );

      case 'range':
        const [from, to] = options.value ?? [null, null];
        return (
          <div className='flex gap-1'>
            <InputNumber
              value={from}
              onChange={(e) =>
                applyFilter([e.value, to], options.filterApplyCallback)
              }
              className='w-full'
              placeholder='from'
            />
            <InputNumber
              value={to}
              onChange={(e) =>
                applyFilter([from, e.value], options.filterApplyCallback)
              }
              className='w-full'
              placeholder='to'
            />
          </div>
        );

      case 'tristate':
        return (
          <TriStateCheckbox
            value={options.value}
            onChange={(e) => applyFilter(e.value, options.filterApplyCallback)}
          />
        );

      case 'search':
        return (
          <div className='flex justify-content-end'>
            <InputText
              value={options.value || ''}
              onChange={(e) =>
                options.filterApplyCallback(e.target.value, options.index)
              }
              placeholder='Keyword Search'
              className='p-column-filter'
              filter
            />
          </div>
        );

      case 'date':
        return (
          <Calendar
            value={options.value}
            onChange={(e) => options.filterCallback(e.value, options.index)}
            dateFormat='mm/dd/yy'
            placeholder='mm/dd/yyyy'
            mask='99/99/9999'
          />
        );

      default:
        return null;
    }
  };

  const renderHeader = () => (
    <div className='flex justify-content-end'>
      <InputText
        value={globalFilterValue}
        onChange={onGlobalFilterChange}
        placeholder='Keyword Search'
      />
    </div>
  );

  // Add default filter options if not present
  const processedColumns = columns.map((col, idx) => {
    if (
      !col.filterOptions &&
      ['multiselect', 'dropdown'].includes(col.filterType)
    ) {
      const uniqueValues = [...new Set(value.map((item) => item[col.field]))]
        .filter((v) => v !== undefined && v !== null)
        .map((val) => ({
          label: typeof val === 'object' ? JSON.stringify(val) : val,
          value: val,
        }));

      return {
        ...col,
        filterOptions: uniqueValues,
        minWidth: idx === 0 ? '120px' : idx === 1 ? '80px' : '150px',
      };
    }
    return {
      ...col,
      minWidth: idx === 0 ? '120px' : idx === 1 ? '80px' : '150px',
    };
  });

  // const header = renderHeader();
  const calculateColumnWidth = (data, field, padding = 10) => {
    const maxLength = Math.max(
      ...data.map(
        (item) => String(item[field]?.name || item[field] || '').length
      )
    );

    return `${maxLength * padding}px`;
  };

  const filterApplyTemplate = (options) => {
    return (
      <button
        type='button'
        icon='pi pi-check'
        onClick={options.filterApplyCallback}
        severity='success'
      >
        Apply
      </button>
    );
  };

  const filterClearTemplate = (options) => {
    return (
      <button
        type='button'
        onClick={options.filterClearCallback}
        severity='secondary'
        className='mr-4'
      >
        Clear
      </button>
    );
  };
  const handleCheckboxChange = (e) => {
    if (e.value.length === 0) {
      setSelectedItems(null);
      value.forEach((item) => {
        selectHandler({ target: { checked: false } }, item.id);
      });
      return;
    }

    const selectedIds = e.value.map((item) => item.id);
    value.forEach((item) => {
      const isSelected = selectedIds.includes(item.id);
      selectHandler({ target: { checked: isSelected } }, item.id);
    });

    setSelectedItems(e.value);
  };

  return (
    <>
      <Tooltip target='.cursor-pointer' position='top' />
      <DataTable
        value={value}
        rows={20}
        dataKey='id'
        filters={filters}
        filterDisplay='menu'
        scrollable
        scrollHeight='530px'
        // header={header}
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
        style={{ height: '200px', borderCollapse: 'separate !important' }}
        selectOnEdit={false}
        showGridlines
        stripedRows
        size='large'
        onFilter={(e) => setFilters(e.filters)}
      >
        {processedColumns.map((col) => {
          if (col.field !== 'checkbox') {
            return (
              <Column
                key={col.field}
                field={col.field}
                header={col.header || col.field}
                className='.p-column-filter-menu-button has-tooltip'
                headerStyle={{
                  whiteSpace: 'nowrap',
                  backgroundColor: '#680bf3',

                  color: '#ffffff',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                }}
                style={{
                  minWidth: calculateColumnWidth(value, col.field),
                }}
                bodyStyle={{
                  color: '#000',
                  fontSize: '1.2rem',
                }}
                filter={col.filter}
                filterPlaceholder={col.filterPlaceholder}
                filterField={col.filterField || col.field}
                body={(rowData) => {
                  if (col.field === 'mot') {
                    if (
                      rowData[col.field] === 'sea_dispatch' ||
                      rowData[col.field] === 'sea_dispatches'
                    ) {
                      return 'Sea';
                    }
                    if (
                      rowData[col.field] === 'air_dispatch' ||
                      rowData[col.field] === 'air_dispatches'
                    ) {
                      return 'Air';
                    }
                  }

                  return rowData[col.field];
                }}
                filterElement={(options) => getFilterElement(options, col)}
                frozen={col.frozen}
                alignFrozen={col.alignFrozen}
                align={'center'}
                showFilterMenu={true}
                filterApply={filterApplyTemplate}
                showFilterMatchModes={col.showFilterMatchModes}
                dataType={col.dataType}
                filterClear={filterClearTemplate}
                alignHeader={'center'}
              />
            );
          }
        })}
      </DataTable>
    </>
  );
}
