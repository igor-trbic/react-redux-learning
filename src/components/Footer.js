import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'
import { Grid, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <Grid fluid>
    <Row className="show-grid">
      <Col mdOffset={1} xs={11} md={11}>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>
          All
        </FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
              Active
        </FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
              Completed
        </FilterLink>
      </Col>
    </Row>
  </Grid>
)

export default Footer