import React from 'react'
import { useSelector } from 'react-redux'
import type {RootState} from '@redux/store'
import ReportYearContainer from './ReportYearContainer';
import { initialReportsCollection } from '@data/dummy-data';


const ReportsWrapper = () => {
    const collection = useSelector((state: RootState) => state.patient.reportsCollection).reports;
    console.log(collection)
    // const collection = initialReportsCollection.reports;
    const chronologicalCollection = collection.sort((a: any, b: any) => b.date - a.date)
    // const arrangeReportsByMonth = getReportsByMonth(chronologicalCollection)
    // console.log(arrangeReportsByMonth)
    const bucketedByYear: any = new Map();
    chronologicalCollection.forEach((report: any, i: any) => {
        const yearNum = report.date.getFullYear();
        if (!bucketedByYear.get(yearNum)) {
            bucketedByYear.set(yearNum, { yearNum: yearNum, reports: [report] })
        } else {
            const existingValue = bucketedByYear.get(yearNum)
            bucketedByYear.set(yearNum, { ...existingValue, reports: [...existingValue.reports, report] })
        }
    });
    // console.log(bucketedByYear)
    const yearlyReportsArray:any[] = [];
    const yearKeyArray:string[] = [];
    bucketedByYear.forEach((value: any, key: any) => yearlyReportsArray.push(value));
    bucketedByYear.forEach((value:any,key:any)=> yearKeyArray.push(key))

    return (
        <div className="reports-wrapper">
            {
                yearlyReportsArray.map((object, i) => {
                    // console.log(object)
                    return (<ReportYearContainer key={i} index={i} yearKey={object.yearNum} yearlyReports={object.reports} />)
                })
            }
        </div>
    )
}

export default ReportsWrapper

//TODO => For some reason, this function I used to abstract the logic to bucket reports by year doesn't seem to return the map that I have specified
// const getBucketChronologicalYear = (collection: Report[]) => {
//     const bucketedByYear:any= new Map();
//     collection.map((report, i) => {
//         const yearNum = report.date.getFullYear();
//         if (!bucketedByYear.get(yearNum)) {
//             bucketedByYear.set(yearNum, { yearNum: yearNum, reports:[report]})
//         } else {
//             const existingValue = bucketedByYear.get(yearNum)
//             bucketedByYear.set(yearNum,{...existingValue, reports:[...existingValue.reports, report]} )
//         }
//     })
//     console.log(bucketedByYear)
//     return bucketedByYear
// }

