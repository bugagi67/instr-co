import styles from "./ListCategory.module.css"

export type Item = string

type ListCategoryProps = {
  list: Item[]
}

export const ListCategory = ({ list }: ListCategoryProps) => {
  return (
    <div>
      {list.map((item, idx) => (
        <div key={idx} className={styles.item_list}>
          {item}
        </div>
      ))}
    </div>
  );
};
