import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside class="left-sidebar" data-sidebarbg="skin6">

            <div class="scroll-sidebar" data-sidebarbg="skin6">

                <nav class="sidebar-nav">
                    <ul id="sidebarnav">
                        <li class="sidebar-item"> <Link class="sidebar-link sidebar-link" to="index.html"
                            aria-expanded="false"><i data-feather="home" class="feather-icon"></i><span
                                class="hide-menu">Dashboard</span></Link></li>
                        <li class="list-divider"></li>
                        <li class="nav-small-cap"><span class="hide-menu">Applications</span></li>

                        <li class="sidebar-item"> <Link class="sidebar-link" to="ticket-list.html"
                            aria-expanded="false"><i data-feather="tag" class="feather-icon"></i><span
                                class="hide-menu">Ticket List
                            </span></Link>
                        </li>
                        <li class="sidebar-item"> <Link class="sidebar-link sidebar-link" to="app-chat.html"
                            aria-expanded="false"><i data-feather="message-square" class="feather-icon"></i><span
                                class="hide-menu">Chat</span></Link></li>
                        <li class="sidebar-item"> <Link class="sidebar-link sidebar-link" to="app-calendar.html"
                            aria-expanded="false"><i data-feather="calendar" class="feather-icon"></i><span
                                class="hide-menu">Calendar</span></Link></li>

                        <li class="list-divider"></li>
                        <li class="nav-small-cap"><span class="hide-menu">Components</span></li>
                        <li class="sidebar-item"> <Link class="sidebar-link has-arrow" to="#!"
                            aria-expanded="false"><i data-feather="file-text" class="feather-icon"></i><span
                                class="hide-menu">Forms </span></Link>
                            <ul aria-expanded="false" class="collapse  first-level base-level-line">
                                <li class="sidebar-item"><Link to="form-inputs.html" class="sidebar-link"><span
                                    class="hide-menu"> Form Inputs
                                </span></Link>
                                </li>
                                <li class="sidebar-item"><Link to="form-input-grid.html" class="sidebar-link"><span
                                    class="hide-menu"> Form Grids
                                </span></Link>
                                </li>
                                <li class="sidebar-item"><Link to="form-checkbox-radio.html" class="sidebar-link"><span
                                    class="hide-menu"> Checkboxes &
                                    Radios
                                </span></Link>
                                </li>
                            </ul>
                        </li>
                        <li class="sidebar-item"> <Link class="sidebar-link has-arrow" to="#!"
                            aria-expanded="false"><i data-feather="grid" class="feather-icon"></i><span
                                class="hide-menu">Tables </span></Link>
                            <ul aria-expanded="false" class="collapse  first-level base-level-line">
                                <li class="sidebar-item"><Link to="table-basic.html" class="sidebar-link"><span
                                    class="hide-menu"> Basic Table
                                </span></Link>
                                </li>
                                <li class="sidebar-item"><Link to="table-dark-basic.html" class="sidebar-link"><span
                                    class="hide-menu"> Dark Basic Table
                                </span></Link>
                                </li>
                                <li class="sidebar-item"><Link to="table-sizing.html" class="sidebar-link"><span
                                    class="hide-menu">
                                    Sizing Table
                                </span></Link>
                                </li>
                                <li class="sidebar-item"><Link to="table-layout-coloured.html" class="sidebar-link"><span
                                    class="hide-menu">
                                    Coloured
                                    Table Layout
                                </span></Link>
                                </li>
                                <li class="sidebar-item"><Link to="table-datatable-basic.html" class="sidebar-link"><span
                                    class="hide-menu">
                                    Basic
                                    Datatables
                                    Layout
                                </span></Link>
                                </li>
                            </ul>
                        </li>
                        <li class="sidebar-item"> <Link class="sidebar-link has-arrow" to="#!"
                            aria-expanded="false"><i data-feather="bar-chart" class="feather-icon"></i><span
                                class="hide-menu">Charts </span></Link>
                            <ul aria-expanded="false" class="collapse  first-level base-level-line">
                                <li class="sidebar-item"><Link to="chart-morris.html" class="sidebar-link"><span
                                    class="hide-menu"> Morris Chart
                                </span></Link>
                                </li>
                                <li class="sidebar-item"><Link to="chart-chart-js.html" class="sidebar-link"><span
                                    class="hide-menu"> ChartJs
                                </span></Link>
                                </li>
                                <li class="sidebar-item"><Link to="chart-knob.html" class="sidebar-link"><span
                                    class="hide-menu">
                                    Knob Chart
                                </span></Link>
                                </li>
                            </ul>
                        </li>
                        <li class="sidebar-item"> <Link class="sidebar-link has-arrow" to="#!"
                            aria-expanded="false"><i data-feather="box" class="feather-icon"></i><span
                                class="hide-menu">UI Elements </span></Link>
                            <ul aria-expanded="false" class="collapse  first-level base-level-line">
                                <li class="sidebar-item"><Link to="ui-buttons.html" class="sidebar-link"><span
                                    class="hide-menu"> Buttons
                                </span></Link>
                                </li>
                                <li class="sidebar-item"><Link to="ui-modals.html" class="sidebar-link"><span
                                    class="hide-menu"> Modals </span></Link>
                                </li>
                                <li class="sidebar-item"><Link to="ui-tab.html" class="sidebar-link"><span
                                    class="hide-menu"> Tabs </span></Link></li>
                                <li class="sidebar-item"><Link to="ui-tooltip-popover.html" class="sidebar-link"><span
                                    class="hide-menu"> Tooltip &
                                    Popover</span></Link></li>
                                <li class="sidebar-item"><Link to="ui-notification.html" class="sidebar-link"><span
                                    class="hide-menu">Notification</span></Link></li>
                                <li class="sidebar-item"><Link to="ui-progressbar.html" class="sidebar-link"><span
                                    class="hide-menu">Progressbar</span></Link></li>
                                <li class="sidebar-item"><Link to="ui-typography.html" class="sidebar-link"><span
                                    class="hide-menu">Typography</span></Link></li>
                                <li class="sidebar-item"><Link to="ui-bootstrap.html" class="sidebar-link"><span
                                    class="hide-menu">Bootstrap
                                    UI</span></Link></li>
                                <li class="sidebar-item"><Link to="ui-breadcrumb.html" class="sidebar-link"><span
                                    class="hide-menu">Breadcrumb</span></Link></li>
                                <li class="sidebar-item"><Link to="ui-list-media.html" class="sidebar-link"><span
                                    class="hide-menu">List
                                    Media</span></Link></li>
                                <li class="sidebar-item"><Link to="ui-grid.html" class="sidebar-link"><span
                                    class="hide-menu"> Grid </span></Link></li>
                                <li class="sidebar-item"><Link to="ui-carousel.html" class="sidebar-link"><span
                                    class="hide-menu">
                                    Carousel</span></Link></li>
                                <li class="sidebar-item"><Link to="ui-scrollspy.html" class="sidebar-link"><span
                                    class="hide-menu">
                                    Scrollspy</span></Link></li>
                                <li class="sidebar-item"><Link to="ui-toasts.html" class="sidebar-link"><span
                                    class="hide-menu"> Toasts</span></Link>
                                </li>
                                <li class="sidebar-item"><Link to="ui-spinner.html" class="sidebar-link"><span
                                    class="hide-menu"> Spinner </span></Link>
                                </li>
                            </ul>
                        </li>
                        <li class="sidebar-item"> <Link class="sidebar-link sidebar-link" to="ui-cards.html"
                            aria-expanded="false"><i data-feather="sidebar" class="feather-icon"></i><span
                                class="hide-menu">Cards
                            </span></Link>
                        </li>
                        <li class="list-divider"></li>
                        <li class="nav-small-cap"><span class="hide-menu">Authentication</span></li>

                        <li class="sidebar-item"> <Link class="sidebar-link sidebar-link" to="authentication-login1.html"
                            aria-expanded="false"><i data-feather="lock" class="feather-icon"></i><span
                                class="hide-menu">Login
                            </span></Link>
                        </li>
                        <li class="sidebar-item"> <Link class="sidebar-link sidebar-link"
                            to="authentication-register1.html" aria-expanded="false"><i data-feather="lock"
                                class="feather-icon"></i><span class="hide-menu">Register
                            </span></Link>
                        </li>

                        <li class="sidebar-item"> <Link class="sidebar-link has-arrow" to="#!"
                            aria-expanded="false"><i data-feather="feather" class="feather-icon"></i><span
                                class="hide-menu">Icons
                            </span></Link>
                            <ul aria-expanded="false" class="collapse first-level base-level-line">
                                <li class="sidebar-item"><Link to="icon-fontawesome.html" class="sidebar-link"><span
                                    class="hide-menu"> Fontawesome Icons </span></Link></li>

                                <li class="sidebar-item"><Link to="icon-simple-lineicon.html" class="sidebar-link"><span
                                    class="hide-menu"> Simple Line Icons </span></Link></li>
                            </ul>
                        </li>

                        <li class="sidebar-item"> <Link class="sidebar-link has-arrow" to="#!"
                            aria-expanded="false"><i data-feather="crosshair" class="feather-icon"></i><span
                                class="hide-menu">Multi
                                level
                                dd</span></Link>
                            <ul aria-expanded="false" class="collapse first-level base-level-line">
                                <li class="sidebar-item"><Link to="#!" class="sidebar-link"><span
                                    class="hide-menu"> item 1.1</span></Link>
                                </li>
                                <li class="sidebar-item"><Link to="#!" class="sidebar-link"><span
                                    class="hide-menu"> item 1.2</span></Link>
                                </li>
                                <li class="sidebar-item"> <Link class="has-arrow sidebar-link" to="#!"
                                    aria-expanded="false"><span class="hide-menu">Menu 1.3</span></Link>
                                    <ul aria-expanded="false" class="collapse second-level base-level-line">
                                        <li class="sidebar-item"><Link to="#!" class="sidebar-link"><span
                                            class="hide-menu"> item
                                            1.3.1</span></Link></li>
                                        <li class="sidebar-item"><Link to="#!" class="sidebar-link"><span
                                            class="hide-menu"> item
                                            1.3.2</span></Link></li>
                                        <li class="sidebar-item"><Link to="#!" class="sidebar-link"><span
                                            class="hide-menu"> item
                                            1.3.3</span></Link></li>
                                        <li class="sidebar-item"><Link to="#!" class="sidebar-link"><span
                                            class="hide-menu"> item
                                            1.3.4</span></Link></li>
                                    </ul>
                                </li>
                                <li class="sidebar-item"><Link to="#!" class="sidebar-link"><span
                                    class="hide-menu"> item
                                    1.4</span></Link></li>
                            </ul>
                        </li>
                        <li class="list-divider"></li>
                        <li class="nav-small-cap"><span class="hide-menu">Extra</span></li>
                        <li class="sidebar-item"> <Link class="sidebar-link sidebar-link" to="http://adminmart.com/docs/docs.html"
                            aria-expanded="false"><i data-feather="edit-3" class="feather-icon"></i><span
                                class="hide-menu">Documentation</span></Link></li>
                        <li class="sidebar-item"> <Link class="sidebar-link sidebar-link" to="authentication-login1.html"
                            aria-expanded="false"><i data-feather="log-out" class="feather-icon"></i><span
                                class="hide-menu">Logout</span></Link></li>
                    </ul>
                </nav>

            </div>

        </aside>
    )
}

export default Sidebar