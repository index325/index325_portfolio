import { Box } from "@chakra-ui/react";
import DataTable, {
  createTheme,
  TableColumn,
  Themes,
} from "react-data-table-component";
import { Skeleton } from "@chakra-ui/skeleton";

interface Props {
  data: any[];
  columns: TableColumn<any>[];
  loading: boolean;
}

createTheme("solarized", {
  text: {
    primary: "#fff",
    secondary: "#fff",
  },
  background: {
    default: "#1e1f20",
  },
  divider: {
    default: "#fff",
  },
  action: {
    button: "#fff",
    hover: "rgba(0,0,0,.08)",
    disabled: "rgba(0,0,0,.12)",
  },
});

const Table = ({ data, columns, loading, ...rest }: Props) => {
  return (
    <Box my="4">
      {loading ? (
        <Skeleton height="350px" />
      ) : (
        <DataTable
          title="Solarized Movie List"
          columns={columns}
          data={data}
          theme={"default" as Themes}
          selectableRows
          pagination
          {...rest}
        />
      )}
    </Box>
  );
};

export default Table;
