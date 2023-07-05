// import { useState } from "react";
import { Button, Form, Input, Row, Select, Space, theme } from "antd";

const { Option } = Select;

const formConfig: any[] = [
  {
    name: "zu",
    label: "组织",
    component: "Input",
    marginLeft: 10,
    componentProps: {
      placeholder: "模糊搜索",
    },
  },
  {
    name: "name",
    label: "姓名",
    component: "Select",
    selectWidth: 200,
    componentProps: {
      placeholder: "模糊搜索",
      options: [
        {
          label: "启用",
          value: "启用",
          key: "启用",
        },
        {
          label: "禁用",
          value: "禁用",
          key: "禁用",
        },
      ],
    },
  },
];

const newList = (myList: any[]) => {
  return myList.map((item) => {
    if (item.component === "Input") {
      return (
        <Form.Item
          key={item.name}
          label={item.label}
          name={item.name}
          style={{ marginLeft: item.marginLeft || 0 }}
        >
          <Input placeholder={item.componentProps.placeholder} />
        </Form.Item>
      );
    } else if (item.component === "Select") {
      return (
        <Form.Item
          key={item.name}
          label={item.label}
          name={item.name}
          style={{ width: item.selectWidth || "auto" }}
        >
          <Select placeholder={item.componentProps.placeholder}>
            {item.componentProps.options.map((option:any) => (
              <Option
                key={option.key}
                value={option.value}
                label={option.label}
              >
                {option.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
      );
    } else {
      return null;
    }
  });
};

// const newList = (myList: any[]): any[] => {
// return myList.map((item) => {
//   const { name, label, component, ...rest } = item;
//   if (item.type === "Input") {
//     <Form.Item
//       name={name}
//       label={label}
//       style={{ marginLeft: item.marginLeft }}
//     >
//       <Input />
//     </Form.Item>;
//   } else if (item.type === "Select") {
//     <Form.Item name={item.name} label={item.label}>
//       <Select style={{ width: item.selectWidth }}>
//         <Option value="1">one</Option>
//         <Option value="2">two</Option>
//       </Select>
//     </Form.Item>;
//   }
// });
// };
const RowList = () => {
  return (
    <Row gutter={24}>
      {/* <Form.Item name="age" label="组织">
        <Input placeholder="placeholder" />
      </Form.Item>
      <Form.Item name="name" label="姓名" style={{ marginLeft: 10 }}>
        <Select style={{ width: 200 }}>
          <Option value="1">1231231213131321</Option>
          <Option value="2">222</Option>
        </Select>
        
      </Form.Item> */}
      {newList(formConfig)}
    </Row>
  );
};

interface SearchList {
  searchList: any[];
}

const MySearch: React.FC<SearchList> = ({ searchList }) => {
  const { token } = theme.useToken();
  const [form] = Form.useForm();
  // const [expand, setExpand] = useState(false);

  const formStyle = {
    maxWidth: "none",
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    padding: 24,
  };
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  const listStyle: React.CSSProperties = {
    lineHeight: "200px",
    textAlign: "center",
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    marginTop: 16,
  };

  return (
    <>
      <Form
        form={form}
        name="advanced_search"
        style={formStyle}
        onFinish={onFinish}
      >
        <RowList />
        <div style={{ textAlign: "right" }}>
          <Space size="small">
            <Button type="primary" htmlType="submit">
              Search123
            </Button>
          </Space>
        </div>
      </Form>
      <div style={listStyle}>Search Result List</div>
    </>
  );
};

export default MySearch;
