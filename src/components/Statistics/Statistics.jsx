import css from './Statistics.module.css'
import randomColor from './randomColor'

const Statistics = ({ title, stats }) => {
  return (
      <section className={css.statistics}>
          {title && <h2 className={css.title}>{title}</h2>}  
          <ul className={css.statList}>
              {stats.map(({ id, label, percentage }) => {
                  return (
                    <li className={css.item} key={id} style={{backgroundColor: randomColor()}}>
                        <span className={css.label}>{label}</span>
                        <span className={css.percentage}>{percentage}%</span>
                    </li>
                  )
              })}
          </ul>
    </section>
  )
}

export default Statistics