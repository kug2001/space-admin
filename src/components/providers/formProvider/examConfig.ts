// const config: CreateFormConfig[] = [
//   {
//     key: 'questionType',
//     title: '질문 유형',
//     formComponent: FormQuestionType,
//     formProps: {},
//   },
//   {
//     key: 'typeDetail',
//     title: '유형 상세',
//     formComponent: FormTypeDetail,
//     formProps: {},
//     stateInit: {
//       searchCategory: '',
//       selectCategories: [
//         { depth: 1, categoryIdx: undefined },
//         { depth: 2, categoryIdx: undefined },
//         { depth: 3, categoryIdx: undefined }
//       ]
//     }
//   },
//   {
//     key: 'projectName',
//     title: '프로젝트 명',
//     formComponent: FormProjectName,
//     formProps: {},
//     stateInit: {
//       projectName: ''
//     },
//     validation: {
//       required: '프로젝트 명을 입력해 주세요.',
//       minLength: {
//         value: 4,
//         message: '최소 4자 이상부터 입력 가능합니다.'
//       },
//       maxLength: {
//         value: 64,
//         message: '최대 64자 까지 입력 가능합니다.'
//       },
//       pattern: {
//         value: /^[a-z|0-9-]+[a-z|0-9]$/,
//         message:
//           '공백 없이 영어 소문자, 숫자,-만 사용 가능하며, 영·숫자로 시작하거나 끝나야 합니다.'
//       }
//     }
//   },
//   {
//     key: 'regions',
//     title: '리전 선택',
//     formComponent: FormRegions,
//     formProps: {
//       placeholder: '리전 정보를 입력해 주세요.'
//     } as FormRegionsProps,
//     stateInit: {
//       selectRegionIdx: null
//     },
//     validation: {
//       required: '리전을 선택해주세요.'
//     }
//   },
//   {
//     key: 'questionTitle',
//     title: '제목',
//     formComponent: FormTitle,
//     formProps: {},
//     stateInit: {
//       title: ''
//     },
//     validation: {
//       required: '프로젝트 명을 입력해 주세요.',
//       maxLength: {
//         value: 30,
//         message: `최대 30자 까지 입력 가능합니다.`
//       }
//     }
//   },
//   {
//     key: 'questionContext',
//     title: '질문 내용',
//     formComponent: FormContext,
//     stateInit: {
//       context: '',
//       isSecret: false
//     },
//     validation: {
//       required: '질문 내용을 입력해주세요.',
//       maxLength: {
//         value: 1000,
//         message: '최대 1000자 까지 입력 가능합니다.'
//       }
//     }
//   },
//   {
//     key: 'fileAttach',
//     title: '첨부파일',
//     formComponent: FormFileAttach,
//     formProps: {
//       limitConfig: {
//         COUNT: 5,
//         SIZE_MB: 30,
//         ACCEPT_EXTENSION: '.jpg, .jpeg, .png, .pdf, .zip',
//         SUPPORT_TYPES: 'application/pdf, image/png, image/jpg, image/jpeg, application/zip',
//         ACCEPT_INFO: 'JPG, JPEG, PNG, PDF, ZIP',
//         TOTAL_SIZE: 30 * 1024 * 1024
//       }
//     } as FormFileAttachProps,
//     stateInit: {
//       files: []
//     }
//   }
// ];
//
// export const formConfig = createFormConfig(config);
