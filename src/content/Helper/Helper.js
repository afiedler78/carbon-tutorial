import React, { useState } from 'react';
import {
  Document,
  Folder,
  TrashCan,
  Download,
  Save,
} from '@carbon/icons-react';
import {
  FlexGrid,
  Row,
  Column,
  TreeView,
  TreeNode,
  Select,
  Button,
  TableSelectAll,
  TableSelectRow,
  TableContainer,
  TableBatchAction,
  TableBatchActions,
  TableToolbarContent,
  TableToolbarMenu,
  TableToolbarAction,
} from '@carbon/react';
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableToolbar,
  TableToolbarSearch,
} from '@carbon/react';

const Helper = () => {
  const [selectedRisks, setSelectedRisks] = useState([]);
  const [selectedControls, setSelectedControls] = useState([]);

  const handleSubmit = () => {
    // Check if any risks or controls have been selected
    if (selectedRisks.length === 0 && selectedControls.length === 0) {
      alert('Please select at least one risk and one control.');
      return;
    }

    // Show a confirmation dialog
    const confirmDialog = window.confirm(
      'Do you want to request the association for these L3 Risks and Controls?'
    );

    if (confirmDialog) {
      // Do something with the selected risks and controls
    }
  };

  const nodes = [
    {
      id: '1',
      value: 'Westpac Group',
      label: 'Level 1 (branch)',
      renderIcon: Folder,
      children: [
        {
          id: '1-1',
          value: 'CBB',
          label: 'CBB',
          renderIcon: Folder,
          children: [
            {
              id: '1-1-1',
              value: 'Business Lending',
              label: 'Business Lending',
              renderIcon: Document,
            },
            {
              id: '1-1-2',
              value: 'Mortgages',
              label: 'Mortgages',
              renderIcon: Document,
            },
          ],
        },
        {
          id: '1-2',
          value: 'CST',
          label: 'CST',
          renderIcon: Document,
        },
        {
          id: '1-3',
          value: 'Finance',
          label: 'Finance',
          renderIcon: Document,
        },
        {
          id: '1-4',
          value: 'Risk',
          label: 'Risk',
          renderIcon: Document,
        },
        {
          id: '1-5',
          value: 'WIB',
          label: 'WIB',
          renderIcon: Folder,
          children: [
            {
              id: '1-5-1',
              value: 'FM',
              label: 'FM',
              renderIcon: Document,
            },
            {
              id: '1-5-2',
              value: 'GTS',
              label: 'GTS',
              renderIcon: Document,
            },
          ],
        },
      ],
    },
  ];

  const riskRows = [
    {
      id: 'L3-RSK00001',
      riskId: 'L3-RSK00001',
      name: 'Risk 1',
      status: 'Awaiting Assessment',
    },
    {
      id: 'L3-RSK00002',
      riskId: 'L3-RSK00002',
      name: 'Risk 2',
      status: 'Assessed',
    },
    {
      id: 'L3-RSK00003',
      riskId: 'L3-RSK00003',
      name: 'Risk 3',
      status: 'Awaiting Assessment',
    },
  ];

  const riskHeaders = [
    {
      key: 'riskId',
      header: 'ID',
    },
    {
      key: 'name',
      header: 'Name',
    },
    {
      key: 'status',
      header: 'Status',
    },
  ];

  const controlRows = [
    {
      id: 'CTL-00001',
      ctlId: 'CTL-00001',
      name: 'Control 1',
      status: 'Awaiting Assessment',
    },
    {
      id: 'CTL-00002',
      ctlId: 'CTL-00002',
      name: 'Control 2',
      status: 'Assessed',
    },
    {
      id: 'CTL-00003',
      ctlId: 'CTL-00003',
      name: 'Control 3',
      status: 'Awaiting Assessment',
    },
  ];

  const controlHeaders = [
    {
      key: 'ctlId',
      header: 'ID',
    },
    {
      key: 'name',
      header: 'Name',
    },
    {
      key: 'status',
      header: 'Status',
    },
  ];

  function renderTree({ nodes, expanded, withIcons = false }) {
    if (!nodes) {
      return;
    }
    return nodes.map(({ children, renderIcon, isExpanded, ...nodeProps }) => (
      <TreeNode
        key={nodeProps.id}
        renderIcon={withIcons ? renderIcon : null}
        isExpanded={expanded ?? isExpanded}
        {...nodeProps}>
        {renderTree({
          nodes: children,
          expanded,
          withIcons,
        })}
      </TreeNode>
    ));
  }

  return (
    <div>
      <FlexGrid>
        <Row>
          <Column lg={4}>
            <TreeView label="Parent Hierarchy">
              {renderTree({
                nodes,
              })}
            </TreeView>
            <DataTable rows={riskRows} headers={riskHeaders} isSortable>
              {({
                rows,
                headers,
                getHeaderProps,
                getRowProps,
                getSelectionProps,
                getToolbarProps,
                getBatchActionProps,
                onInputChange,
                selectedRows,
                getTableProps,
                getTableContainerProps,
              }) => (
                <TableContainer title="Risks">
                  <TableToolbar>
                    <TableBatchActions {...getBatchActionProps()}>
                      <TableBatchAction
                        tabIndex={
                          getBatchActionProps().shouldShowBatchActions ? 0 : -1
                        }
                        renderIcon={TrashCan}
                        onClick={() => console.log('clicked' + selectedRows)}>
                        Delete
                      </TableBatchAction>
                      <TableBatchAction
                        tabIndex={
                          getBatchActionProps().shouldShowBatchActions ? 0 : -1
                        }
                        renderIcon={Save}
                        onClick={() => console.log('clicked')}>
                        Save
                      </TableBatchAction>
                      <TableBatchAction
                        tabIndex={
                          getBatchActionProps().shouldShowBatchActions ? 0 : -1
                        }
                        renderIcon={Download}
                        onClick={() => console.log('clicked')}>
                        Download
                      </TableBatchAction>
                    </TableBatchActions>
                    <TableToolbarContent>
                      <TableToolbarSearch
                        tabIndex={
                          getBatchActionProps().shouldShowBatchActions ? -1 : 0
                        }
                        onChange={onInputChange}
                      />
                      <TableToolbarMenu
                        tabIndex={
                          getBatchActionProps().shouldShowBatchActions ? -1 : 0
                        }>
                        <TableToolbarAction
                          primaryFocus
                          onClick={() => alert('Alert 1')}>
                          Action 1
                        </TableToolbarAction>
                        <TableToolbarAction onClick={() => alert('Alert 2')}>
                          Action 2
                        </TableToolbarAction>
                        <TableToolbarAction onClick={() => alert('Alert 3')}>
                          Action 3
                        </TableToolbarAction>
                      </TableToolbarMenu>
                      <Button
                        tabIndex={
                          getBatchActionProps().shouldShowBatchActions ? -1 : 0
                        }
                        onClick={() => console.log('clicked')}
                        size="small"
                        kind="primary">
                        Add new
                      </Button>
                    </TableToolbarContent>
                  </TableToolbar>
                  <Table {...getTableProps()}>
                    <TableHead>
                      <TableRow>
                        <TableSelectAll {...getSelectionProps()} />
                        {headers.map(header => (
                          <TableHeader {...getHeaderProps({ header })}>
                            {header.header}
                          </TableHeader>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map(row => (
                        <TableRow {...getRowProps({ row })}>
                          <TableSelectRow {...getSelectionProps({ row })} />
                          {row.cells.map(cell => (
                            <TableCell key={cell.id}>{cell.value}</TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </DataTable>
          </Column>
          <Column lg={4}>
            <TreeView label="Child Hierarchy">
              {renderTree({
                nodes,
              })}
            </TreeView>
            <DataTable rows={controlRows} headers={controlHeaders} isSortable>
              {({
                rows,
                headers,
                getHeaderProps,
                getRowProps,
                getSelectionProps,
                getToolbarProps,
                getBatchActionProps,
                onInputChange,
                selectedRows,
                getTableProps,
                getTableContainerProps,
              }) => (
                <TableContainer title="Controls">
                  <TableToolbar>
                    <TableBatchActions {...getBatchActionProps()}>
                      <TableBatchAction
                        tabIndex={
                          getBatchActionProps().shouldShowBatchActions ? 0 : -1
                        }
                        renderIcon={TrashCan}
                        onClick={() => console.log('clicked' + selectedRows)}>
                        Delete
                      </TableBatchAction>
                      <TableBatchAction
                        tabIndex={
                          getBatchActionProps().shouldShowBatchActions ? 0 : -1
                        }
                        renderIcon={Save}
                        onClick={() => console.log('clicked')}>
                        Save
                      </TableBatchAction>
                      <TableBatchAction
                        tabIndex={
                          getBatchActionProps().shouldShowBatchActions ? 0 : -1
                        }
                        renderIcon={Download}
                        onClick={() => console.log('clicked')}>
                        Download
                      </TableBatchAction>
                    </TableBatchActions>
                    <TableToolbarContent>
                      <TableToolbarSearch
                        tabIndex={
                          getBatchActionProps().shouldShowBatchActions ? -1 : 0
                        }
                        onChange={onInputChange}
                      />
                      <TableToolbarMenu
                        tabIndex={
                          getBatchActionProps().shouldShowBatchActions ? -1 : 0
                        }>
                        <TableToolbarAction
                          primaryFocus
                          onClick={() => alert('Alert 1')}>
                          Action 1
                        </TableToolbarAction>
                        <TableToolbarAction onClick={() => alert('Alert 2')}>
                          Action 2
                        </TableToolbarAction>
                        <TableToolbarAction onClick={() => alert('Alert 3')}>
                          Action 3
                        </TableToolbarAction>
                      </TableToolbarMenu>
                      <Button
                        tabIndex={
                          getBatchActionProps().shouldShowBatchActions ? -1 : 0
                        }
                        onClick={() => console.log('clicked')}
                        size="small"
                        kind="primary">
                        Add new
                      </Button>
                    </TableToolbarContent>
                  </TableToolbar>
                  <Table {...getTableProps()}>
                    <TableHead>
                      <TableRow>
                        <TableSelectAll {...getSelectionProps()} />
                        {headers.map(header => (
                          <TableHeader {...getHeaderProps({ header })}>
                            {header.header}
                          </TableHeader>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map(row => (
                        <TableRow {...getRowProps({ row })}>
                          <TableSelectRow {...getSelectionProps({ row })} />
                          {row.cells.map(cell => (
                            <TableCell key={cell.id}>{cell.value}</TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </DataTable>
          </Column>
        </Row>
        <Row>
          <Column>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
            <Button variant="cancel">Cancel</Button>
          </Column>
        </Row>
      </FlexGrid>
    </div>
  );
};

export default Helper;
