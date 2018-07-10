<template>
<div class="">
  <div style="margin: 10px 0;overflow: hidden">
    <Button @click="handleSelectAll(true)" style="margin-right:10px;">全选 </Button>
    <Button @click="handleSelectAll(false)" style="margin-right:10px;">取消全选</Button>
    <Button @click="exportExcel" style="margin-right:10px;">导出xlsx</Button>
    <Button @click="exportCsv">导出csv</Button>
  </div>
  <Table id="selection" @on-selection-change="selectionTable" ref="selection" :data="tableData1" :columns="tableColumns1" stripe></Table>
  <div style="margin: 10px;overflow: hidden">
    <div style="float: right;">
      <Page :total="100" :current="1" @on-change="changePage"></Page>
    </div>
  </div>
</div>
</template>
<script>
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
export default {
  data() {
    return {
      tableData1: this.mockTableData1(),
      tableColumns1: [{
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: 'ID',
          key: 'id',
          minWidth: 100,
          align: 'center',
          sortable: true
        }, {
          title: 'Name',
          key: 'name',
          minWidth: 100,
        },
        {
          title: 'Status',
          key: 'status',
          minWidth: 150,
          render: (h, params) => {
            const row = params.row;
            const color = row.status === 1 ? 'blue' : row.status === 2 ? 'green' : 'red';
            const text = row.status === 1 ? 'Working' : row.status === 2 ? 'Success' : 'Fail';
            return h('Tag', {
              props: {
                type: 'dot',
                color: color
              }
            }, text);
          }
        },

        {
          title: 'People',
          key: 'people',
          minWidth: 150,
          render: (h, params) => {
            return h('Poptip', {
              props: {
                trigger: 'hover',
                title: params.row.people.length + 'customers',
                placement: 'bottom'
              }
            }, [
              h('Tag', params.row.people.length),
              h('div', {
                slot: 'content'
              }, [
                h('ul', this.tableData1[params.index].people.map(item => {
                  return h('li', {
                    style: {
                      textAlign: 'center',
                      padding: '4px'
                    }
                  }, item.n + '：' + item.c + 'People')
                }))
              ])
            ]);
          }
        },
        {
          title: 'Sampling Time',
          key: 'time',
          minWidth: 120,
          render: (h, params) => {
            return h('div', 'Almost' + params.row.time + 'days');
          }
        },
        {
          title: 'Updated Time',
          key: 'update',
          minWidth: 150,
          render: (h, params) => {
            return h('div', this.formatDate(this.tableData1[params.index].update));
          }
        },
        {
          title: 'Action',
          key: 'action',
          minWidth: 150,
          fixed: "right",
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.row.id)
                  }
                }
              }, 'View'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove(params.index)
                  }
                }
              }, 'Delete')
            ]);
          }
        }
      ]
    }
  },
  methods: {
    mockTableData1() {
      let data = [];
      for (let i = 0; i < 10; i++) {
        data.push({
          id: i,
          name: 'Business' + Math.floor(Math.random() * 100 + 1),
          status: Math.floor(Math.random() * 3 + 1),
          portrayal: ['City', 'People', 'Cost', 'Life', 'Entertainment'],
          people: [{
              n: 'People' + Math.floor(Math.random() * 100 + 1),
              c: Math.floor(Math.random() * 1000000 + 100000)
            },
            {
              n: 'People' + Math.floor(Math.random() * 100 + 1),
              c: Math.floor(Math.random() * 1000000 + 100000)
            },
            {
              n: 'People' + Math.floor(Math.random() * 100 + 1),
              c: Math.floor(Math.random() * 1000000 + 100000)
            }
          ],
          time: Math.floor(Math.random() * 7 + 1),
          update: new Date()
        })
      }
      return data;
    },
    formatDate(date) {
      const y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? '0' + m : m;
      let d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      return y + '-' + m + '-' + d;
    },
    changePage() {
      this.tableData1 = this.mockTableData1();
    },
    show(val) {
      this.$Modal.info({
        title: 'User Info',
        content: val
      })
    },
    remove(index) {
      this.tableData1.splice(index, 1);
    },
    handleSelectAll(status) {
      this.$refs.selection.selectAll(status);
    },
    selectionTable(val) {
      console.log(val)
    },
    // npm install --save xlsx file-saver
    exportExcel() {
      /* generate workbook object from table */
      var wb = XLSX.utils.table_to_book(document.querySelector('#selection'))
      /* get binary string as output */
      var wbout = XLSX.write(wb, {
        bookType: 'xlsx',
        bookSST: true,
        type: 'array'
      })
      try {
        FileSaver.saveAs(new Blob([wbout], {
          type: 'application/octet-stream'
        }), 'sheetjs.xlsx')
      } catch (e) {
        if (typeof console !== 'undefined') console.log(e, wbout)
      }
      return wbout
    },
    exportCsv() {
      this.$refs.selection.exportCsv({
        filename: 'Custom data',
      });
    }

  }
}
</script>
