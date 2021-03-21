import {clientName } from '../../utils/config'

function Footer() {
  return (
    <footer>
      <svg aria-hidden="true" style={{ position: 'absolute', width: '0', height: 0, overflow: 'hidden' }} version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
        <defs>
          <symbol id="icon-twitter" viewBox="0 0 32 32">
            <path fill="#1da1f2" style={{ fill: '#ffffff' }} d="M31.939 6.092c-1.18 0.519-2.44 0.872-3.767 1.033 1.352-0.815 2.392-2.099 2.884-3.631-1.268 0.74-2.673 1.279-4.169 1.579-1.195-1.279-2.897-2.079-4.788-2.079-3.623 0-6.56 2.937-6.56 6.556 0 0.52 0.060 1.020 0.169 1.499-5.453-0.257-10.287-2.876-13.521-6.835-0.569 0.963-0.888 2.081-0.888 3.3 0 2.28 1.16 4.284 2.917 5.461-1.076-0.035-2.088-0.331-2.971-0.821v0.081c0 3.18 2.257 5.832 5.261 6.436-0.551 0.148-1.132 0.228-1.728 0.228-0.419 0-0.82-0.040-1.221-0.115 0.841 2.604 3.26 4.503 6.139 4.556-2.24 1.759-5.079 2.807-8.136 2.807-0.52 0-1.039-0.031-1.56-0.089 2.919 1.859 6.357 2.945 10.076 2.945 12.072 0 18.665-9.995 18.665-18.648 0-0.279 0-0.56-0.020-0.84 1.281-0.919 2.4-2.080 3.28-3.397z"></path>
          </symbol>
          <symbol id="icon-facebook" viewBox="0 0 32 32">
            <path fill="#1877f2" style={{ fill: '#ffffff' }} d="M31.997 15.999c0-8.836-7.163-15.999-15.999-15.999s-15.999 7.163-15.999 15.999c0 7.985 5.851 14.604 13.499 15.804v-11.18h-4.062v-4.625h4.062v-3.525c0-4.010 2.389-6.225 6.043-6.225 1.75 0 3.581 0.313 3.581 0.313v3.937h-2.017c-1.987 0-2.607 1.233-2.607 2.498v3.001h4.437l-0.709 4.625h-3.728v11.18c7.649-1.2 13.499-7.819 13.499-15.804z"></path>
          </symbol>
          <symbol id="icon-strava" viewBox="0 0 32 32">
            <path fill="#fc4c02" style={{ fill: '#ffffff' }} d="M20.516 23.925l-2.785-5.488h-4.087l6.872 13.563 6.867-13.563h-4.088zM13.951 10.972l3.781 7.464h5.563l-9.344-18.436-9.333 18.437h5.559z"></path>
          </symbol>
          <symbol id="icon-link" viewBox="0 0 32 32">
            <path d="M6 2v24h24v-24h-24zM28 24h-20v-20h20v20zM4 28v-21l-2-2v25h25l-2-2h-21z"></path>
            <path d="M11 8l5 5-6 6 3 3 6-6 5 5v-13z"></path>
          </symbol>
        </defs>
      </svg>
      <div className="content">
        <nav aria-label="footer links">
          <ul>
            <li>
              <a href="https://www.facebook.com/groups/7060391875/">
                <svg className="icon icon-facebook" aria-hidden="true">
                  <use xlinkHref="#icon-facebook"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/elmbridgerr">
                <svg className="icon icon-twitter" aria-hidden="true">
                  <use xlinkHref="#icon-twitter"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.strava.com/clubs/24422">
                <svg className="icon icon-strava" aria-hidden="true">
                  <use xlinkHref="#icon-strava"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="/links">
                <svg className="icon icon-link">
                  <use xlinkHref="#icon-link"></use>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
        <p>Copyright © {new Date().getFullYear()} {clientName}</p>
      </div>
    </footer>
  )
}

export default Footer