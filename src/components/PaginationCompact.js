import React from 'react'
import { connect } from 'react-redux'
import { Pagination } from 'semantic-ui-react'
import { pageChange } from '../actions'

class PaginationCompact extends React.Component {

    handlePaginationChange = event => {
        let pageNum = +event.target.getAttribute('value');

        this.props.pageChange(pageNum);
    };

    render() {
        const TASKS_ON_PAGE = 3;
        return (
            (
                <Pagination
                    boundaryRange={0}
                    defaultActivePage={1}
                    ellipsisItem={null}
                    firstItem={null}
                    lastItem={null}
                    siblingRange={1}
                    totalPages={Math.ceil(this.props.total_tasks_count / TASKS_ON_PAGE)}
                    onPageChange={this.handlePaginationChange}
                />
            )
        )
    }
}

const mapStateToProps = state => {
    return {
        total_tasks_count: +state.tasks.total_task_count
    }
};

export default connect(mapStateToProps, { pageChange })(PaginationCompact)