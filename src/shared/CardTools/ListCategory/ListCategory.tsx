import styles from "./ListCategory.module.css"

export type Item = string

type ListCategoryProps = {
  list: Item[]
}

export const ListCategory = ({ list }: ListCategoryProps) => {
  return (
    <div className={styles.list_category}>
      <ul>
        {list.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
